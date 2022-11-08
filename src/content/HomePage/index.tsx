import React, { useState } from 'react';
import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import AddressDisplay from './AddressDisplay';
import { UHTabComponent } from 'src/components';
import BookYourPickup from 'src/content/BookYourPickup';
import Profile from 'src/content/Profile';
import OrdersPages from 'src/content/OrdersPage';
import {
  BookYourPageImage,
  RoundPattern,
  DottedPattern
} from 'src/Assets/Images';
import { ORIENTATION } from 'src/Config/constant';

const useStyles = makeStyles((theme: Theme) => ({
  superOuterContainer: {
    background: '#e2e1e1',
    // 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(14.66deg, #70B245 -27.51%, #FFFFFF 54.57%)',
    width: '100%',
    padding: theme.spacing(3, 12, 12, 16)
  },
  imageContainer: {
    paddingLeft: theme.spacing(8),
    position: 'sticky',
    top: 0,
    height: '100%'
  },
  addressContainer: {
    padding: theme.spacing(0, 0, 1, 0)
  },
  tabContainer: {
    backgroundColor: 'transparent',
    width: '100%'
  },
  tabRoot: {
    fontSize: theme.MetricsSizes.small_xxx,
    color: theme.Colors.mediumBlack,
    fontWeight: theme.fontWeight.regular
  },
  selectedTab: {
    fontWeight: theme.fontWeight.bold,
    color: theme.Colors.blueMediumDark
  }
}));

function HomePage() {
  const classes = useStyles();
  const theme = useTheme();
  const tabItems = [
    { id: 1, label: 'Book Your Pickup', component: () => <BookYourPickup /> },
    { id: 2, label: 'Orders', component: () => <OrdersPages /> },
    { id: 3, label: 'Profile', component: () => <Profile /> }
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
    <Grid
      className={classes.superOuterContainer}
      style={{
        backgroundImage:
          selectedTab === tabItems[0]?.id
            ? `url(${RoundPattern}), url(${DottedPattern})`
            : 'none',
        backgroundAttachment: 'fixed',
        backgroundPositionY: '-6rem, 29rem',
        backgroundPositionX: '80rem, right',
        backgroundRepeat: ' no-repeat, no-repeat'
      }}
    >
      <Grid container>
        <Grid
          item
          xs={selectedTab === tabItems[0]?.id ? 8 : 12}
          className={classes.addressContainer}
        >
          <AddressDisplay />
        </Grid>
        <Grid item xs={selectedTab === tabItems[0]?.id ? 8 : 12}>
          <UHTabComponent
            currentTabVal={selectedTab}
            tabContent={tabItems}
            orientation={ORIENTATION.HORIZONTAL}
            tabIndicatorColor={theme.Colors.secondary}
            tabContainerClassName={classes.tabContainer}
            renderTabContent={renderTabContent}
            onTabChange={onTabChange}
            tabClasses={{
              root: classes.tabRoot,
              selected: classes.selectedTab
            }}
          />
        </Grid>
        {selectedTab === tabItems[0]?.id && (
          <Grid item xs={4} className={classes.imageContainer}>
            <img src={BookYourPageImage} alt="Image" />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

export default HomePage;
