import React from 'react';
import { Theme, useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { AccordionComponent } from 'src/components';
import { Grid } from '@material-ui/core';
import { ChooseCategoryIcon } from 'src/Assets/Images';
import { TrashDetailsIcon } from 'src/Assets/Images';
import { SelectVehicleIcon } from 'src/Assets/Images';
import { ScheduleYourPickupIcon } from 'src/Assets/Images';
import { PickupAddressIcon } from 'src/Assets/Images';
import { OrderConfirmationIcon } from 'src/Assets/Images';
import { OrderSuccessIcon } from 'src/Assets/Images';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme: Theme) => ({
  outerContainer: {
    //border: "1px solid red"
  },
  contentContainer1: {
    width: '100% ',
    paddingBottom: theme.spacing(2),
  },
  contentContainer2: {
    width: '100% ',
    border: '1px solid ',
    borderColor: theme.Colors.greyDark,
  }
}));

function MyAccount() {
  const classes = useStyles();
  const theme = useTheme();

  const myProfileContent = [
    {
      summaryHeading: '',
      content: "Profile",
      displayIcon: ChooseCategoryIcon
    }
];
    const myAccountContent = [
    {
      summaryHeading: 'Change Language',
      content: 'Change Language',
      displayIcon: TrashDetailsIcon,
    },
    {
      summaryHeading: 'Change User Type',
      content: 'Change User Type',
      displayIcon: SelectVehicleIcon
    },
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
            accBorderColor={theme.Colors.greyDark}
            expandMoreIcon={<ExpandMoreIcon style={{  transform: "rotate(270deg)",}} />}
        />
        </Grid>
        <Grid item className={classes.contentContainer2}>
        <AccordionComponent 
            displayContent={myAccountContent} 
            //withBorder
            isProfile
            //accBorderColor={theme.Colors.greyDark}
            expandMoreIcon={<ExpandMoreIcon />}
        />
        </Grid>
    </Grid>
  );
}

export default MyAccount;
