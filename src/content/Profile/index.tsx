import React, { useEffect, useState } from 'react';
import { Theme , useTheme} from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import OrdersAndProfileTab from 'src/components/OrdersAndProfileTab';
import { CompletedOrdersIcon, PendingOrdersIcon, ConfirmedOrdersIcon } from 'src/Assets/Images';


const useStyles = makeStyles((theme: Theme) => ({
  contentContainer: {
    padding: theme.spacing(6.5,3,6.5,3),
    background: theme.Colors.whitePure,
    
  },
  outerContainer: {
    margin:theme.spacing(2.5,0,2.5,0),
    background: theme.Colors.whitePure,
    
  }
}));

function Profile() {
  const classes = useStyles();
  const theme: Theme = useTheme();
  const [tabToDisplay, setTabToDisplay] = useState(0);
  const OrdersTabItems = [
    {
      tabIcon: PendingOrdersIcon,
      tabItem: "My Account",
    },
    {
      tabIcon: ConfirmedOrdersIcon,
      tabItem: "Change Language",
    },
    {
      tabIcon: CompletedOrdersIcon,
      tabItem: "Change User Type",
    }];

  const handleSetSelectedTab = (value) => {
    setTabToDisplay(value);
  };

  function TabContent(props) {
    const { children, value, index } = props;
    return value === index && <>{children}</>;
  }
  return (
    <Grid container className={classes.outerContainer}>
      <Grid container className={classes.contentContainer}>
        <OrdersAndProfileTab 
          displayContent={OrdersTabItems}
          onTabChange={handleSetSelectedTab}
        />
          <TabContent value={tabToDisplay} index={0}>
            Pending Orders
          </TabContent>
          <TabContent value={tabToDisplay} index={1}>
            Confirmed Orders
          </TabContent>
          <TabContent value={tabToDisplay} index={2}>
           Completed orders
          </TabContent>
      </Grid>
      </Grid>
    );

}

export default Profile;
