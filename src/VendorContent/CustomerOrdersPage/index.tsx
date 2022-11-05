import React, { useCallback, useEffect, useState } from 'react';
import { Theme, useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import CustomerOrderDialog from './CustomerOrderDialog';
import { API_SERVICES } from 'src/Services';
import { useTranslation } from 'react-i18next';
import useVendorInfo from 'src/hooks/useVendorInfo';
import {
  CONFIRM_MODAL,
  CUSTOMER_ORDER_STATUS,
  HTTP_STATUSES,
  ORIENTATION
} from 'src/Config/constant';
import {
  ButtonComp,
  UHConfirmModal,
  UHOrderPreviewComp,
  UHTabComponent
} from 'src/components';
import {
  CompletedOrdersIcon,
  ConfirmedOrdersIcon,
  PendingOrdersIcon,
  confirmVendor,
  YetToConfirm
} from 'src/Assets';

import toast from 'react-hot-toast';
import { getDateFormat } from 'src/Utils';

const useStyles = makeStyles((theme: Theme) => ({
  outerContainer: {
    margin: theme.spacing(1.75, 0, 1.75, 0),
    padding: theme.spacing(6.5, 3, 6.5, 3),
    background: theme.Colors.whitePure,
    position: 'relative'
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
    background: theme.Colors.orangePrimary,
    fontWeight: theme.fontWeight.medium
  },
  buttonContainer: {
    position: 'absolute',
    left: '50%',
    bottom: 28
  }
}));

function OrdersPage() {
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();
  const { vendorDetails } = useVendorInfo();
  const [selectedTab, setSelectedTab] = useState<number>(
    CUSTOMER_ORDER_STATUS.New
  );
  const [orderDetails, setOrderDetails] = useState([]);
  const [modalOpen, setModalOpen] = useState<any>({ open: false });
  const [confirmModal, setConfirmModal] = useState<any>({
    open: false
  });

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
      value: CUSTOMER_ORDER_STATUS.New
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

  const fetchData = useCallback(async () => {
    try {
      if (vendorDetails?.vendor_id === 0) {
        return;
      }
      let response: any;
      if (selectedTab === CUSTOMER_ORDER_STATUS.New) {
        response =
          await API_SERVICES.vendorCustomerOrderService.getCustomerOrderByVendorLocation(
            vendorDetails?.vendor_id
          );
      } else if (selectedTab === CUSTOMER_ORDER_STATUS.Confirmed) {
        response =
          await API_SERVICES.vendorCustomerOrderService.getAllVendorScheduledOrder(
            vendorDetails?.vendor_id
          );
      } else if (selectedTab === CUSTOMER_ORDER_STATUS.Completed) {
        response =
          await API_SERVICES.vendorCustomerOrderService.getAllVendorCompletedOrder(
            vendorDetails?.vendor_id
          );
      }

      if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
        if (response?.data?.orders) {
          setOrderDetails(response.data.orders);
        }
      }
    } catch (err) {
      toast.error(err?.message);
    }
  }, [selectedTab, vendorDetails?.vendor_id]);

  const onCancelOrderButton = (orderId: number) => {
    const onCancelClick = () => {
      setConfirmModal({ open: false });
    };
    const onConfirmClick = async () => {
      let updateData = {
        status_id: CUSTOMER_ORDER_STATUS.Cancelled
      };
      const response: any = await API_SERVICES.vendorPickupDropService.replace(
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
  };

  const onClickBuyOrderButton = (orderId: number) => {
    let customerOrders = [];
  };

  const renderTabContent = () => {
    return (
      <Grid className={classes.tabContentContainer}>
        {orderDetails?.length
          ? orderDetails.map((item, index) => {
              const { getTime, getDateString } = getDateFormat(
                item?.pickup_time
              );
              return (
                <Grid key={index}>
                  <UHOrderPreviewComp
                    orderItems={item}
                    isButtonOne={
                      selectedTab !== CUSTOMER_ORDER_STATUS.Completed
                    }
                    isButtonTwo={
                      selectedTab !== CUSTOMER_ORDER_STATUS.Completed
                    }
                    isCheckBox={selectedTab === CUSTOMER_ORDER_STATUS.New}
                    handleClickButtonOne={onClickViewDetails}
                    handleClickButtonTwo={
                      selectedTab === CUSTOMER_ORDER_STATUS.New
                        ? onClickBuyOrderButton
                        : onCancelOrderButton
                    }
                    orderStatusText={
                      (selectedTab === CUSTOMER_ORDER_STATUS.Confirmed &&
                        `Scheduled on ${getDateString}, ${getTime}`) ||
                      (selectedTab == CUSTOMER_ORDER_STATUS.Completed &&
                        `Delivered on ${getDateString}, ${getTime}`)
                    }
                    statusIcon={
                      selectedTab === CUSTOMER_ORDER_STATUS.Pending
                        ? YetToConfirm
                        : confirmVendor
                    }
                    buttonTwoText={
                      selectedTab === CUSTOMER_ORDER_STATUS.New
                        ? 'BUY ORDER'
                        : 'CANCEL'
                    }
                    buttonTwoStyle={{
                      background: theme.Colors.orangePrimary,
                      width: 100
                    }}
                    buttonOneStyle={{
                      border: '0.5px solid',
                      borderColor: theme.Colors.orangePrimary,
                      color: theme.Colors.orangePrimary
                    }}
                  />
                </Grid>
              );
            })
          : null}
      </Grid>
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
        <Grid className={classes.buttonContainer}>
          {selectedTab === CUSTOMER_ORDER_STATUS.New ? (
            <ButtonComp
              buttonText={'BUY ORDERS'}
              buttonFontSize={theme.MetricsSizes.small_xxx}
              backgroundColor={theme.Colors.orangePrimary}
              btnBorderRadius={105}
              height={'48px'}
              btnWidth={'217px'}
            />
          ) : null}
        </Grid>
      </Grid>
      {modalOpen.open && (
        <CustomerOrderDialog
          onClose={() => setModalOpen({ open: false })}
          {...modalOpen}
          // onCancelButtonClick={onCancelOrderButton}
        />
      )}
      {confirmModal.open && <UHConfirmModal {...confirmModal} />}
    </>
  );
}

export default OrdersPage;
