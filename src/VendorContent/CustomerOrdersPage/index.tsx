import React, { useCallback, useEffect, useState } from 'react';
import { Theme, useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import CustomerOrderDialog from './CustomerOrderDialog';
import { API_SERVICES } from 'src/Services';
import { useTranslation } from 'react-i18next';
import useUserInfo from 'src/hooks/useUserInfo';
import {
  CONFIRM_MODAL,
  CUSTOMER_ORDER_STATUS,
  HTTP_STATUSES,
  ORIENTATION
} from 'src/Config/constant';
import { ButtonComp, UHConfirmModal, UHTabComponent } from 'src/components';
import {
  CompletedOrdersIcon,
  ConfirmedOrdersIcon,
  PendingOrdersIcon
} from 'src/Assets';
import toast from 'react-hot-toast';
import OrderPreviewComp from './OrderPreviewComp';

const useStyles = makeStyles((theme: Theme) => ({
  contentContainer: {
    padding: theme.spacing(6.5, 3, 6.5, 3),
    background: theme.Colors.whitePure
  },
  outerContainer: {
    margin: theme.spacing(1.75, 0, 1.75, 0),
    background: theme.Colors.whitePure
  },
  tabContainer: {
    border: '0.5px solid',
    borderColor: theme.Colors.greyDark,
    paddingTop: theme.spacing(4)
  },
  tabContentStyle: {
    height: 513,
    overflowY: 'scroll'
  },
  tabContentContainer: {
    margin: theme.spacing(0, 2)
  },
  selectedTabStyle: {
    color: theme.Colors.whitePure,
    background: theme.Colors.secondary,
    fontWeight: theme.fontWeight.medium
  },
  buttonContainer: {
    position: 'sticky',
    bottom: 0,
    zIndex: 1,
    left: '50%',
    display: 'inline-flex',
    transform: 'translateX(-50%)'
  }
}));

function OrdersPage() {
  const classes = useStyles();
  const theme = useTheme();
  const { userDetails } = useUserInfo();
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState<number>(
    CUSTOMER_ORDER_STATUS.Pending
  );
  const [orderDetails, setOrderDetails] = useState([]);
  const [modalOpen, setModalOpen] = useState<any>({ open: false });
  const [confirmModal, setConfirmModal] = useState<any>({
    open: false
  });
  const { t } = useTranslation();

  const onClickViewDetails = (orderData: any) => {
    setModalOpen({
      open: true,
      orderData: orderData
    });
  };

  const OrdersTabItems = [
    {
      tabIcon: PendingOrdersIcon,
      label: t('ORDER.new'),
      value: CUSTOMER_ORDER_STATUS.Pending
    },
    {
      tabIcon: ConfirmedOrdersIcon,
      label: t('ORDER.scheduled'),
      value: CUSTOMER_ORDER_STATUS.Confirmed
    },
    {
      tabIcon: CompletedOrdersIcon,
      label: t('ORDER.completed'),
      value: CUSTOMER_ORDER_STATUS.Completed
    }
  ];

  // const fetchData = useCallback(async () => {
  //   try {
  //     const response: any =
  //       await API_SERVICES.vendorCustomerOrderService.getVendorsOrders(
  //         userDetails?.vendor_id
  //       );
  //     if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
  //       if (response?.data) {
  //         let orderData = [];
  //         for (let i = 0; i < response.data.length; i++) {
  //           if (selectedTab === CUSTOMER_ORDER_STATUS.Pending) {
  //             if (response.data[i].status_id === 1) {
  //               orderData.push(response.data[i]);
  //             }
  //           }
  //           if (selectedTab === CUSTOMER_ORDER_STATUS.Confirmed) {
  //             if (response.data[i].status_id === 2) {
  //               orderData.push(response.data[i]);
  //             }
  //           }
  //           if (selectedTab === CUSTOMER_ORDER_STATUS.Completed) {
  //             if (response.data[i].status_id === 3) {
  //               orderData.push(response.data[i]);
  //               console.log('test data ', response.data[i]);
  //             }
  //           }
  //         }
  //         setOrderDetails(orderData);
  //       }
  //     }
  //   } catch (err) {
  //     toast.error(err?.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, [selectedTab]);

  const fetchData = useCallback(async () => {
    try {
      const response: any = await Promise.all([
        API_SERVICES.vendorCustomerOrderService.getVendorsOrders(
          userDetails?.status_id
        ),
        API_SERVICES.vendorCustomerOrderService.getScheduledOrder(
          userDetails?.status_id
        ),
        API_SERVICES.vendorCustomerOrderService.getCompletedOrder(
          userDetails?.status_id
        )
      ]);
      console.log('----array res----', response);
      if (response[0]?.status <= HTTP_STATUSES.BAD_REQUEST) {
        if (response[0]?.data) {
          console.log('====array res data===', response[0].data);
          let orderData = [];
          console.log('---------length---------', response[0].data.length);
          for (let i = 0; i < response[0].data.length; i++) {
            if (selectedTab === CUSTOMER_ORDER_STATUS.Pending) {
              if (response[0].data[i].status_id === 1) {
                orderData.push(response[0].data[i]);
              }
            }
          }
          for (let i = 0; i < response[1].data.length; i++) {
            if (selectedTab === CUSTOMER_ORDER_STATUS.Confirmed) {
              if (response[1].data[i].status_id === 2) {
                orderData.push(response[1].data[i]);
              }
            }
          }
          for (let i = 0; i < response[2].data.length; i++) {
            if (selectedTab === CUSTOMER_ORDER_STATUS.Completed) {
              if (response[2].data[i].status_id === 3) {
                orderData.push(response[2].data[i]);
              }
            }
          }
          setOrderDetails(orderData);
        }
      }
    } catch (err) {
      toast.error(err?.message);
    } finally {
      setLoading(false);
    }
  }, [selectedTab]);

  const onClickCancelButton = (orderId: number) => {
    const onCancelClick = () => {
      setConfirmModal({ open: false });
    };
    const onConfirmClick = async () => {
      let updateData = {
        status_id: 4
      };
      const response: any = await API_SERVICES.customerOrderService.replace(
        orderId,
        {
          data: updateData,
          successMessage: 'Order cancelled successfully!'
        }
      );
      if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
        onCancelClick();
        setModalOpen({ open: false });
        fetchData();
      }
    };
    let props = {
      color: theme.Colors.redPrimary,
      description: t('ORDER.cancelCustomerOrder'),
      title: t('cancelOrder'),
      iconType: CONFIRM_MODAL.cancel
    };
    setConfirmModal({ open: true, onConfirmClick, onCancelClick, ...props });
    //   fetchData();
  };

  const renderTabContent = () => {
    return (
      <>
        <Grid className={classes.tabContentContainer}>
          <OrderPreviewComp
            orderItems={orderDetails}
            isCancelButton={true}
            onClickViewDetails={onClickViewDetails}
            onClickCancelButton={onClickCancelButton}
            orderStatus
          />
        </Grid>
        <Grid className={classes.buttonContainer}>
          {selectedTab === CUSTOMER_ORDER_STATUS.Pending ? (
            <ButtonComp
              buttonText={'BUY ORDERS'}
              buttonFontSize={16}
              variant="contained"
              buttonFontWeight={500}
              btnBorderRadius={105}
              height={'48px'}
              btnWidth={'217px'}
            />
          ) : null}
        </Grid>
      </>
    );
  };

  const onTabChange = (tabValue: any) => {
    setSelectedTab(tabValue);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <Grid className={classes.outerContainer}>
        <Grid className={classes.contentContainer}>
          <UHTabComponent
            currentTabVal={selectedTab}
            tabContent={OrdersTabItems}
            orientation={ORIENTATION.VERTICAL}
            tabClasses={{ selected: classes.selectedTabStyle }}
            tabIndicatorColor={theme.Colors.primary}
            isDivider={false}
            tabContainerClassName={classes.tabContainer}
            renderTabContent={renderTabContent}
            tabContentClassName={classes.tabContentStyle}
            onTabChange={onTabChange}
          />
        </Grid>
      </Grid>
      {modalOpen.open && (
        <CustomerOrderDialog
          onClose={() => setModalOpen({ open: false })}
          {...modalOpen}
          onCancelButtonClick={onClickCancelButton}
        />
      )}
      {confirmModal.open && <UHConfirmModal {...confirmModal} />}
    </>
  );
}

export default OrdersPage;
