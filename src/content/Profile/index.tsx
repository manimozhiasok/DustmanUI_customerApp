import React, { useState } from 'react';
import { Theme, useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import OrdersAndProfileTab from 'src/components/OrdersAndProfileTab';
import {
  CompletedOrdersIcon,
  PendingOrdersIcon,
  ConfirmedOrdersIcon
} from 'src/Assets/Images';
import MyAccount from './MyAccount';
import ProfileAddressModel from './profileAddressModel';

const useStyles = makeStyles((theme: Theme) => ({
  contentContainer: {
    padding: theme.spacing(6.5, 3, 6.5, 3),
    background: theme.Colors.whitePure
  },
  outerContainer: {
    margin: theme.spacing(1.75, 0, 1.75, 0),
    background: theme.Colors.whitePure
    // height: theme.spacing(78)
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
  }
}));

function Profile() {
  const classes = useStyles();
  const theme = useTheme();
  const [tabToDisplay, setTabToDisplay] = useState(0);
  const [openModal, setOpenModal] = useState<any>({
    open: false
  });
  const OrdersTabItems = [
    {
      tabIcon: PendingOrdersIcon,
      tabItem: 'My Account'
    },
    {
      tabIcon: ConfirmedOrdersIcon,
      tabItem: 'Change Language'
    },
    {
      tabIcon: CompletedOrdersIcon,
      tabItem: 'Change User Type'
    }
  ];

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
            <MyAccount
              handleAddNewItem={() => setOpenModal(true)}
              handleEditListItem={() => setOpenModal(true)}
            />
          </TabContent>
          <TabContent
            value={tabToDisplay}
            index={1}
            className={classes.tabContentContainer}
          >
            <MyAccount accordionExpanded={0} />
          </TabContent>
          <TabContent
            value={tabToDisplay}
            index={2}
            className={classes.tabContentContainer}
          >
            <MyAccount accordionExpanded={1} />
          </TabContent>
        </Grid>
      </Grid>
      {openModal && (
        <ProfileAddressModel
          onClose={() => setOpenModal(false)}
          open={openModal}
        />
      )}
    </Grid>
  );
}

export default Profile;
