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
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

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
      userName: t('PROFILE.userName'),
      userEmail: t('PROFILE.eMail')
    }
  ];
  const myAccountContent = [
    {
      summaryHeading: t('PROFILE.language'),
      content: 'Change Language',
      displayIcon: Translate,
      background: 'none'
    },
    {
      summaryHeading: t('PROFILE.userType'),
      content: 'Change User Type',
      displayIcon: UserSwitch,
      background: 'none'
    }
  ];
  const AccountContent = [
    {
      summaryHeading: t('PROFILE.help'),
      content: 'Help & Support',
      displayIcon: Help,
      background: 'none'
    },
    {
      summaryHeading: t('PROFILE.about'),
      content: 'About',
      displayIcon: Outline,
      background: 'none'
    },
    {
      summaryHeading: t('PROFILE.logout'),
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
