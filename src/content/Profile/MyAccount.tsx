import React from 'react';
import { Theme, useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { AccordionComponent } from 'src/components';
import { Grid } from '@material-ui/core';
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
      profileIcon: AvatarCustomer,
      userName: t('PROFILE.userName'),
      userEmail: t('PROFILE.eMail')
    }
  ];
  const myAccountContent = [
    {
      summaryHeading: t('PROFILE.language'),
      content: 'Change Language',
      profileIcon: Translate,
      background: 'none'
    },
    {
      summaryHeading: t('PROFILE.userType'),
      content: 'Change User Type',
      profileIcon: UserSwitch,
      background: 'none'
    }
  ];
  const AccountContent = [
    {
      summaryHeading: t('PROFILE.help'),
      content: 'Help & Support',
      profileIcon: Help,
      background: 'none'
    },
    {
      summaryHeading: t('PROFILE.about'),
      content: 'About',
      profileIcon: Outline,
      background: 'none'
    },
    {
      summaryHeading: t('PROFILE.logout'),
      content: 'Log Out',
      profileIcon: SignOut,
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
          isMyAccount
          summaryPadding={theme.spacing(0, 2)}
          accordionDetailPadding={theme.spacing(0, 2)}
          accBorderColor={theme.Colors.greyDark}
          expandMoreIcon={<ExpandMoreIcon />}
          expandIcon={true}
        />
      </Grid>
      <Grid item className={classes.contentContainer2}>
        <AccordionComponent
          displayContent={myAccountContent}
          summaryPadding={theme.spacing(0, 2)}
          accordionDetailPadding={theme.spacing(0, 7)}
          expandIcon={true}
          isMyAccount
          expandMoreIcon={<ExpandMoreIcon />}
        />
        <AccordionComponent
          displayContent={AccountContent}
          isMyAccount
          accordionExpanded={accordionExpanded}
          summaryPadding={theme.spacing(0, 2)}
          accordionDetailPadding={theme.spacing(0, 7)}
        />
      </Grid>
    </Grid>
  );
}

export default MyAccount;
