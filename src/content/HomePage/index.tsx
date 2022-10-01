import React, { useEffect, useState } from 'react';
import { Box, Grid, makeStyles, Tab, Tabs, Theme, useTheme } from '@material-ui/core';
import PlaceIcon from '@material-ui/icons/Place';
import AddressDisplay from './AddressDisplay';
import { TabComponent } from 'src/components';
import BookYourPickup from 'src/content/BookYourPickup';
import Profile from 'src/content/Profile';
import OrdersPages from 'src/content/OrdersPage';
import { BookYourPageImage } from 'src/Assets/Images';


const useStyles = makeStyles((theme: Theme) => ({
  superOuterContainer:{
    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(14.66deg, #70B245 -27.51%, #FFFFFF 54.57%)',
    //opacity: 0.2,
    //transform: 'matrix(-1, 0, 0, 1, 0, 0)',
    width: '100%',
    padding: theme.spacing(3,12,12,16),
    //border: '1px solid blue'
  },
  outerContainer:{
    
    
  },
  contentContainer: {
    //border: '1px solid blue'
  }, 
  imageContainer:{
    //border: '1px solid red',
    paddingLeft: theme.spacing(8),
  },
  tabContainer:{
    //border: '1px solid red'
  },
  addressContainer: {
    padding: theme.spacing(0,0,1,0),
  },

 
}));
function HomePage() {
  const classes = useStyles();
  const theme: Theme = useTheme();
  const address = "no 13, 4th cross street, sakthi nagar, kilambakkam";
  const [tabToDisplay, setTabToDisplay] = useState(0);

  const handleSetSelectedTab = (value) => {
    setTabToDisplay(value);
  };

  function TabContent(props) {
    const { children, value, index } = props;
    return value === index && <>{children}</>;
  }
  return (
    <Grid className={classes.superOuterContainer}>
    <Grid className={classes.outerContainer}>
      <Grid container direction="row" className={classes.contentContainer}>
      <Grid item xs={tabToDisplay===0 ? 8 : 12} className={classes.addressContainer}>
        <AddressDisplay />
        </Grid>
        <Grid item xs={tabToDisplay===0 ? 8 : 12} className={classes.tabContainer}>
          <TabComponent 
            displayContent={["Book Your Pickup","Orders","Profile"]}
            onTabChange={handleSetSelectedTab}
          />
          <TabContent value={tabToDisplay} index={0}>
            <BookYourPickup />
          </TabContent>
          <TabContent value={tabToDisplay} index={1}>
            <OrdersPages />
          </TabContent>
          <TabContent value={tabToDisplay} index={2}>
            <Profile />
          </TabContent>
        </Grid>
        {tabToDisplay === 0 &&
        <Grid item xs={4} className={classes.imageContainer}>
          <img src={BookYourPageImage} alt="Image" /> 
        </Grid>
        }

      </Grid> 
    </Grid>
    </Grid>
  );
}

export default HomePage;
