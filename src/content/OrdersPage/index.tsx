import React, { useEffect, useState } from 'react';
import { Theme , useTheme} from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import OrdersAndProfileTab from 'src/components/OrdersAndProfileTab';


const useStyles = makeStyles((theme: Theme) => ({
  contentContainer: {
    padding: theme.spacing(6.5,3,6.5,3),
    background: theme.Colors.whitePure,
    
  },
  outerContainer: {
    margin:theme.spacing(2.5,0,2.5,0),
    background: theme.Colors.whitePure,
    
  },
  tabContentContainer: {
    marginRight: theme.spacing(2),
    border: '0.5px solid',
    borderColor: theme.Colors.greyDark,
  }


}));

function OrdersPage() {
  const classes = useStyles();
  const theme: Theme = useTheme();
  const [tabToDisplay, setTabToDisplay] = useState(0);
  const OrdersTabItems = ["Pending","Confirmed","Completed"];

  const handleSetSelectedTab = (value) => {
    setTabToDisplay(value);
  };

  function TabContent(props) {
    const { children, value, index } = props;
    return value === index && <Grid>{children}</Grid>;
  }
  return (
    <Grid container className={classes.outerContainer}>
      <Grid container className={classes.contentContainer}>
        <OrdersAndProfileTab 
          displayContent={OrdersTabItems}
          onTabChange={handleSetSelectedTab}
          
        />
          <TabContent 
              value={tabToDisplay} 
              index={0}
              className={classes.tabContentContainer}
          >
            Pending Ordershcfgh
          </TabContent>
          <TabContent 
            value={tabToDisplay} 
            index={1}
            className={classes.tabContentContainer}
            >
            Confirmed Orders
          </TabContent>
          <TabContent 
            value={tabToDisplay} 
            index={2}
            className={classes.tabContentContainer}
            >
           Completed orders
          </TabContent>
      </Grid>
      </Grid>
    );

}

export default OrdersPage;
