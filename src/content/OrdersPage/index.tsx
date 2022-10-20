import React, { useEffect, useState } from 'react';
import { Theme, useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import OrdersAndProfileTab from 'src/components/OrdersAndProfileTab';
import { Aluminium, Wood } from 'src/Assets/Images';
import { CompletedOrdersIcon } from 'src/Assets/Images';
import { ConfirmedOrdersIcon } from 'src/Assets/Images';
import { PendingOrdersIcon } from 'src/Assets/Images';
import PendingOrderModal from './PendingOrderModal';
import { ButtonComp } from 'src/components';
import ConfirmedOrderModal from './ConfirmedOrderModel';
import CompletedOrderModal from './CompletedOrderModal';
import OrderComponentNew from 'src/components/orderComponetNew';
import { API_SERVICES } from 'src/Services';

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
    marginRight: theme.spacing(2)
  },
  tabContentOuterContainer: {
    height: theme.spacing(65.5),
    overflowY: 'scroll'
  },
  tabContentContainer: {
    marginRight: theme.spacing(2),
    border: '0.5px solid',
    borderColor: theme.Colors.greyDark
  },
  eachOrderContainer: {}
}));

function OrdersPage() {
  const classes = useStyles();
  const theme = useTheme();
  const [tabToDisplay, setTabToDisplay] = useState(0);
  const [modalOpen, setModalOpen] = useState<any>({ open: false });
  const [confirmedModalOpen, setConfirmedModalOpen] = useState<any>({
    open: false
  });
  const [completedModalOpen, setCompletedModalOpen] = useState<any>({
    open: false
  });

  const onClickButton = () => {
    setModalOpen({
      open: true
    });
  };

  const onClick = () => {
    setConfirmedModalOpen({
      open: true
    });
  };

  const handleClick = () => {
    setCompletedModalOpen({
      open: true
    });
  };

  const OrdersTabItems = [
    {
      tabIcon: PendingOrdersIcon,
      tabItem: 'Pending'
    },
    {
      tabIcon: ConfirmedOrdersIcon,
      tabItem: 'Confirmed'
    },
    {
      tabIcon: CompletedOrdersIcon,
      tabItem: 'Completed'
    }
  ];

  const handleSetSelectedTab = (value) => {
    setTabToDisplay(value);
  };

  function TabContent(props) {
    const { children, value, index } = props;
    return value === index && <Grid>{children}</Grid>;
  }

  const ordersList = [
    {
      displayImage: Aluminium,
      orderId: 123456789,
      category: 'Metals,NewsPaper',
      weight: '25kg',
      place: 'Ambattur',
      status: 'Yet to Confirm'
    },
    {
      displayImage: Wood,
      orderId: 123456789,
      category: 'Metals,NewsPaper',
      weight: '55kg',
      place: 'Ariyalur',
      status: 'Scheduled on Sat, Sep 24, 2022, 02:15 PM'
    },
    {
      displayImage: Wood,
      orderId: 123456789,
      category: 'Metals,NewsPaper',
      weight: '25kg',
      place: 'Ambattur',
      status: 'Delivered on Sat, Sep 24, 2022, 02:15 PM'
    },
    {
      displayImage: Aluminium,
      orderId: 123456789,
      category: 'Metals,NewsPaper',
      weight: '35kg',
      place: 'Adayar',
      status: 'Delivered on Sat, Sep 24, 2022, 02:15 PM'
    }
  ];
  const fetchData = async () => {
    const response: any = await API_SERVICES.orderService.getAll(2);
    console.log(
      'response from order service',
      response.data.orders[0].order_images
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Grid container className={classes.outerContainer}>
        <Grid container className={classes.contentContainer}>
          <Grid item className={classes.tabContainer}>
            <OrdersAndProfileTab
              displayContent={OrdersTabItems}
              onTabChange={handleSetSelectedTab}
              height="100%"
            />
          </Grid>
          <Grid item xs={true} className={classes.tabContentOuterContainer}>
            <TabContent
              value={tabToDisplay}
              index={0}
              className={classes.tabContentContainer}
            >
              <div className={classes.eachOrderContainer}>
                {/* <OrderListingComponent 
              displayContent={ordersList} onClickButton={onClickButton}
               /> */}
                <OrderComponentNew
                  orderComponent={ordersList}
                  isButton={true}
                  onClickButton={onClickButton}
                />
              </div>
            </TabContent>
            <TabContent
              value={tabToDisplay}
              index={1}
              className={classes.tabContentContainer}
            >
              <OrderComponentNew
                orderComponent={ordersList}
                onClickButton={onClick}
              />
            </TabContent>
            <TabContent
              value={tabToDisplay}
              index={2}
              className={classes.tabContentContainer}
            >
              <OrderComponentNew
                orderComponent={ordersList}
                onClickButton={handleClick}
              />
            </TabContent>
          </Grid>
        </Grid>
      </Grid>
      {modalOpen.open && (
        <PendingOrderModal
          onClose={() => setModalOpen({ open: false })}
        />
      )}
      {confirmedModalOpen.open && (
        <ConfirmedOrderModal
          onClose={() => setConfirmedModalOpen({ open: false })}
        />
      )}
      {completedModalOpen.open && (
        <CompletedOrderModal
          onClose={() => setCompletedModalOpen({ open: false })}
        />
      )}
    </>
  );
}

export default OrdersPage;
