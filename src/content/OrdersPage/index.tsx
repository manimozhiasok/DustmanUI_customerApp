import React, { useCallback, useEffect, useState } from 'react';
import { Theme, useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import CustomerOrderModal from './CustomerOrderModal';
import { API_SERVICES } from 'src/Services';
import { useTranslation } from 'react-i18next';
import useUserInfo from 'src/hooks/useUserInfo';
import {
  CONFIRM_MODAL,
  CUSTOMER_ORDER_STATUS,
  HTTP_STATUSES,
  ORIENTATION
} from 'src/Config/constant';
import { UHConfirmModal, UHTabComponent } from 'src/components';
import {
  CompletedOrdersIcon,
  Confirm,
  ConfirmedOrdersIcon,
  PendingOrdersIcon,
  YetToConfirm
} from 'src/Assets';
import OrderPreviewComp from './OrderPreviewComp';
import { getDateFormat } from 'src/Utils';

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
  }
}));

function OrdersPage() {
  const classes = useStyles();
  const theme = useTheme();
  const { userDetails } = useUserInfo();
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
      label: t('ORDER.pending'),
      value: CUSTOMER_ORDER_STATUS.Pending
    },
    {
      tabIcon: ConfirmedOrdersIcon,
      label: t('ORDER.confirmed'),
      value: CUSTOMER_ORDER_STATUS.Confirmed
    },
    {
      tabIcon: CompletedOrdersIcon,
      label: t('ORDER.completed'),
      value: CUSTOMER_ORDER_STATUS.Completed
    }
  ];

  const fetchData = useCallback(async () => {
    let response: any;
    if (selectedTab === CUSTOMER_ORDER_STATUS.Confirmed) {
      response = await API_SERVICES.orderService.getConfirmedCustomerOrders(
        userDetails?.customer_id
      );
    } else {
      response = await API_SERVICES.orderService.getCustomerOrderByStatus(
        userDetails?.customer_id,
        selectedTab
      );
    }
    if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
      if (response?.data?.orders) {
        setOrderDetails(response.data.orders);
      }
    }
  }, [selectedTab]);

  const onClickCancelButton = (orderId: number) => {
    const onCancelClick = () => {
      setConfirmModal({ open: false });
    };
    const onConfirmClick = async () => {
      let updateData = {
        status_id: CUSTOMER_ORDER_STATUS.Cancelled
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
                  <OrderPreviewComp
                    orderItems={item}
                    handleClickButtonOne={onClickViewDetails}
                    handleClickButtonTwo={onClickCancelButton}
                    orderStatusText={
                      (item?.status_id === CUSTOMER_ORDER_STATUS.Pending &&
                        'Yet to Confirm') ||
                      (item?.status_id === CUSTOMER_ORDER_STATUS.Confirmed &&
                        `Scheduled on ${getDateString}, ${getTime}`) ||
                      (item?.status_id === CUSTOMER_ORDER_STATUS.Completed &&
                        `Delivered on ${getDateString}, ${getTime}`)
                    }
                    statusIcon={
                      item?.status_id === CUSTOMER_ORDER_STATUS.Pending
                        ? YetToConfirm
                        : Confirm
                    }
                    isButtonTwo={
                      item?.status_id === CUSTOMER_ORDER_STATUS.Pending
                    }
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
        <CustomerOrderModal
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
