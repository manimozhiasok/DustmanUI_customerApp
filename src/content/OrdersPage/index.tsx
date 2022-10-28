import React, { useCallback, useEffect, useState } from 'react';
import { Theme, useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import PendingOrderModal from './PendingOrderModal';
import ConfirmedOrderModal from './ConfirmedOrderModel';
import CompletedOrderModal from './CompletedOrderModal';
import { API_SERVICES } from 'src/Services';
import { useTranslation } from 'react-i18next';
import useUserInfo from 'src/hooks/useUserInfo';
import {
  CUSTOMER_ORDER_STATUS,
  HTTP_STATUSES,
  ORIENTATION
} from 'src/Config/constant';
import { UHTabComponent } from 'src/components';
import {
  CompletedOrdersIcon,
  ConfirmedOrdersIcon,
  PendingOrdersIcon
} from 'src/Assets';
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
  selectedTab: {
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
  // const [confirmedModalOpen, setConfirmedModalOpen] = useState<any>({
  //   open: false
  // });
  // const [completedModalOpen, setCompletedModalOpen] = useState<any>({
  //   open: false
  // });
  const { t } = useTranslation();

  const onClickViewDetails = () => {
    setModalOpen({
      open: true
    });
  };

  // const onClick = () => {
  //   setConfirmedModalOpen({
  //     open: true
  //   });
  // };

  // const handleClick = () => {
  //   setCompletedModalOpen({
  //     open: true
  //   });
  // };

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
      label: t('ORDER.confirmed'),
      value: CUSTOMER_ORDER_STATUS.Completed
    }
  ];

  const fetchData = useCallback(async () => {
    const response: any =
      await API_SERVICES.orderService.getCustomerOrderByStatus(
        userDetails?.customer_id,
        selectedTab
      );
    if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
      if (response?.data?.orders) {
        setOrderDetails(response.data.orders);
      }
    }
  }, [selectedTab]);

  const renderTabContent = () => {
    return (
      <Grid className={classes.tabContentContainer}>
        <OrderPreviewComp
          orderItems={orderDetails}
          isCancelButton={true}
          onClickViewDetails={onClickViewDetails}
          //  onClickCancelButton={onClickCancelButton}
        />
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
            currentTabVal={undefined}
            tabContent={OrdersTabItems}
            orientation={ORIENTATION.VERTICAL}
            tabClasses={{ selected: classes.selectedTab }}
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
        <PendingOrderModal onClose={() => setModalOpen({ open: false })} />
      )}
      {/* {confirmedModalOpen.open && (
        <ConfirmedOrderModal
          onClose={() => setConfirmedModalOpen({ open: false })}
        />
      )}
      {completedModalOpen.open && (
        <CompletedOrderModal
          onClose={() => setCompletedModalOpen({ open: false })}
        />
      )} */}
    </>
  );
}

export default OrdersPage;
