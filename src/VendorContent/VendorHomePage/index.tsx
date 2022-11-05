import React, { useState } from 'react';
import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import AddressDisplay from './AddressDisplay';
import OrdersPages from 'src/VendorContent/OrdersPage';
import { BookYourPageImage } from 'src/Assets/Images';
import { UHTabComponent } from 'src/components';
import { ORIENTATION } from 'src/Config/constant';
import CustomerOrdersPage from 'src/VendorContent/CustomerOrdersPage';
import BookMyPickup from 'src/VendorContent/BookMyPickUp';
import BookMyDrop from '../BookMyDrop';
import VendorProfile from '../VendorProfile';

const useStyles = makeStyles((theme: Theme) => ({
  superOuterContainer: {
    background: '#E8E8E8',
    //   'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(14.66deg, #F68B1F -27.51%, #FFFFFF 54.57%)',
    width: '100%',
    padding: theme.spacing(3, 12, 12, 16)
  },
  imageContainer: {
    paddingLeft: theme.spacing(8)
  },
  addressContainer: {
    padding: theme.spacing(0, 0, 1, 0)
  },
  tabContainer: {
    backgroundColor: 'transparent'
  }
}));

function VendorHomePage() {
  const classes = useStyles();
  const theme = useTheme();
  const tabItems = [
    {
      id: 1,
      label: 'Customer Orders',
      component: () => <CustomerOrdersPage />
    },
    { id: 2, label: 'My Orders', component: () => <OrdersPages /> },
    { id: 3, label: 'Book my Pickup', component: () => <BookMyPickup /> },
    { id: 4, label: 'Book my Drop', component: () => <BookMyDrop /> },
    { id: 5, label: 'Profile', component: () => <VendorProfile /> }
  ];
  const [selectedTab, setSelectedTab] = useState(tabItems[0]?.id);

  const onTabChange = (value: any) => {
    setSelectedTab(value);
  };

  const renderTabContent = (tabVal?: any) => {
    const findActiveTab = tabItems.find(({ id }) => id === tabVal);
    return <Grid>{findActiveTab ? findActiveTab.component() : null}</Grid>;
  };

  return (
    <Grid className={classes.superOuterContainer}>
      <Grid container>
        <Grid
          item
          xs={selectedTab === tabItems[0]?.id ? 8 : 12}
          className={classes.addressContainer}
        >
          <AddressDisplay />
        </Grid>
        <Grid
          item
          xs={
            selectedTab === tabItems[2]?.id
              ? 8
              : 12 && selectedTab === tabItems[3]?.id
              ? 8
              : 12
          }
        >
          <UHTabComponent
            currentTabVal={selectedTab}
            tabContent={tabItems}
            orientation={ORIENTATION.HORIZONTAL}
            tabIndicatorColor={theme.Colors.orangePrimary}
            tabContainerClassName={classes.tabContainer}
            renderTabContent={renderTabContent}
            onTabChange={onTabChange}
          />
        </Grid>
        {selectedTab === tabItems[2]?.id && (
          <Grid item xs={4} className={classes.imageContainer}>
            <img src={BookYourPageImage} alt="Image" />
            <img src={BookYourPageImage} alt="Image" />
          </Grid>
        )}
        {selectedTab === tabItems[3]?.id && (
          <Grid item xs={4} className={classes.imageContainer}>
            <img src={BookYourPageImage} alt="Image" />
            <img src={BookYourPageImage} alt="Image" />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

export default VendorHomePage;
