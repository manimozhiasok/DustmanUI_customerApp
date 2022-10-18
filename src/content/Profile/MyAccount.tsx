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

function MyAccount({ accordionExpanded }: { accordionExpanded?: number }) {
  const classes = useStyles();
  const theme = useTheme();

  const myProfileContent = [
    {
      summaryHeading: '',
      content: <ProfileContent />,
      displayIcon: AvatarCustomer
    }
  ];
  const myAccountContent = [
    {
      summaryHeading: 'Change Language',
      content: 'Change Language',
      displayIcon: TrashDetailsIcon
    },
    {
      summaryHeading: 'Change User Type',
      content: 'Change User Type',
      displayIcon: SelectVehicleIcon
    }
  ];
  const AccountContent = [
    {
      summaryHeading: 'Help & Support',
      content: 'Help & Support',
      displayIcon: ScheduleYourPickupIcon
    },
    {
      summaryHeading: 'About',
      content: 'About',
      displayIcon: PickupAddressIcon
    },
    {
      summaryHeading: 'Log Out',
      content: 'Log Out',
      displayIcon: OrderConfirmationIcon
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
          isProfile
          accordionPadding={false}
          expandMoreIcon={<ExpandMoreIcon />}
          accordionExpanded={accordionExpanded}
        />
        <AccordionComponent
          displayContent={AccountContent}
          accordionPadding={false}
          accordionDetailPadding={false}
          isProfile
          accordionExpanded={accordionExpanded}
        />
      </Grid>
    </Grid>
  );
}

export default MyAccount;
