import React from 'react';
import { Theme, useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { AccordionComponent } from 'src/components';
import { Divider, Grid, Typography } from '@material-ui/core';
import { AvatarCustomer } from 'src/Assets/Images';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ProfileContent from './profileContent';
import { Help, Outline, SignOut, Translate, UserSwitch } from 'src/Assets';
import { useTranslation } from 'react-i18next';
import ChangeLanguage from './ChangeLanguage';
import ChangeUsertype from './ChangeUsertype';

type Props = {
  text?: string;
  image?: any;
};
const useStyles = makeStyles((theme: Theme) => ({
  outerContainer: {},
  contentContainer1: {
    width: '100% ',
    paddingBottom: theme.spacing(2)
  },
  contentContainer2: {
    width: '100% ',
    border: '1px solid ',
    height: 418,
    borderColor: theme.Colors.greyDark
  },
  horizontalDivider: {
    margin: theme.spacing(2, 0)
  },
  textStyle: {
    padding: theme.spacing(0, 2.5),
    fontSize: theme.MetricsSizes.small_xxx,
    fontWeight: theme.fontWeight.bold,
    color: theme.Colors.primary
  },
  containerStyle: {
    padding: theme.spacing(1, 2)
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
      content: <ChangeLanguage />,
      profileIcon: Translate,
      background: 'none'
    },
    {
      summaryHeading: t('PROFILE.userType'),
      content: <ChangeUsertype />,
      profileIcon: UserSwitch,
      background: 'none'
    }
  ];
  const AccountContent = [
    {
      text: t('PROFILE.help'),
      image: Help
    },
    {
      text: t('PROFILE.about'),
      image: Outline
    },
    {
      text: t('PROFILE.logout'),
      image: SignOut
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
          accordionDetailPadding={theme.spacing(0, 5.5)}
          expandIcon={true}
          isMyAccount
          isDivider
          expandMoreIcon={<ExpandMoreIcon />}
        />
        {AccountContent.map((item, index) => {
          return (
            <>
              <Grid
                key={index}
                container
                direction="row"
                className={classes.containerStyle}
              >
                <Grid>
                  <img src={item.image} alt={'image'} />
                </Grid>
                <Typography className={classes.textStyle}>
                  {item.text}
                </Typography>
              </Grid>
              <Divider className={classes.horizontalDivider} />
            </>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default MyAccount;
