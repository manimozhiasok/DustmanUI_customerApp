import React from 'react';
import { Theme, useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { AccordionComponent } from 'src/components';
import { Grid } from '@material-ui/core';
import { TrashDetailsIcon } from 'src/Assets/Images';
import { SelectVehicleIcon } from 'src/Assets/Images';
import { ScheduleYourPickupIcon } from 'src/Assets/Images';
import { PickupAddressIcon } from 'src/Assets/Images';
import { OrderConfirmationIcon } from 'src/Assets/Images';
import { AvatarCustomer } from 'src/Assets/Images';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ProfileContent from './profileContent';
import { Help, Outline, SignOut, Translate, UserSwitch } from 'src/Assets';

const useStyles = makeStyles((theme: Theme) => ({
  outerContainer: {},
  contentContainer1: {
    width: '100% ',
    paddingBottom: theme.spacing(2)
  },
  contentContainer2: {
    width: '100% ',
    border: '1px solid ',
    borderColor: theme.Colors.greyDark
  }
}));

function MyAccount({
  accordionExpanded,
  handleAddNewItem,
  handleEditListItem
}: {
  accordionExpanded?: number;
  handleEditListItem?: () => void;
  handleAddNewItem?: () => void;
}) {
  const classes = useStyles();
  const theme = useTheme();

  const myProfileContent = [
    {
      summaryHeading: '',
      content: (
        <ProfileContent
          handleAddNewItem={handleEditListItem}
          handleEditListItem={handleAddNewItem}
        />
      ),
      displayIcon: AvatarCustomer,
      userName: 'Prabhu',
      userEmail: 'prabu@dustman.com'
    }
  ];
  const myAccountContent = [
    {
      summaryHeading: 'Change Language',
      content: 'Change Language',
      displayIcon: Translate,
      background: 'none'
    },
    {
      summaryHeading: 'Change User Type',
      content: 'Change User Type',
      displayIcon: UserSwitch,
      background: 'none'
    }
  ];
  const AccountContent = [
    {
      summaryHeading: 'Help & Support',
      content: 'Help & Support',
      displayIcon: Help,
      background: 'none'
    },
    {
      summaryHeading: 'About',
      content: 'About',
      displayIcon: Outline,
      background: 'none'
    },
    {
      summaryHeading: 'Log Out',
      content: 'Log Out',
      displayIcon: SignOut,
      background: 'none'
    }
  ];
  return (
    <Grid container className={classes.outerContainer}>
      <Grid item className={classes.contentContainer1}>
        <AccordionComponent
          displayContent={myProfileContent}
          withBorder
          isProfile
          accordionPadding={false}
          isMyAccount
          accordionDetailPadding={false}
          accBorderColor={theme.Colors.greyDark}
          expandMoreIcon={
            <ExpandMoreIcon style={{ transform: 'rotate(270deg)' }} />
          }
        />
      </Grid>
      <Grid item className={classes.contentContainer2}>
        <AccordionComponent
          displayContent={myAccountContent}
          accordionDetailPadding={false}
          expandIcon={true}
          isMyAccount
          accordionPadding={false}
          expandMoreIcon={<ExpandMoreIcon />}
          accordionExpanded={accordionExpanded}
          isDivider
        />
        <AccordionComponent
          displayContent={AccountContent}
          accordionPadding={false}
          accordionDetailPadding={false}
          isMyAccount
          accordionExpanded={accordionExpanded}
          isDivider
        />
      </Grid>
    </Grid>
  );
}

export default MyAccount;
