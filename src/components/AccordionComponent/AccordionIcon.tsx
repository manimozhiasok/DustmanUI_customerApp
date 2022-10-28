import React from 'react';
import { useTheme } from '@material-ui/styles';
import { Grid, Typography, makeStyles, Theme, Button } from '@material-ui/core';

type Props = {
  profileIcon?: string;
  userName?: string;
  userEmail?: string;
};

const useStyles = makeStyles<Theme, Props>((theme) => {
  return {
    subText: {
      padding: theme.spacing(1.5, 0),
      color: theme.Colors.mediumGrey,
      fontWeight: theme.fontWeight.bold,
      fontSize: '17px'
    },
    userDetails: {
      fontWeight: theme.fontWeight.regular,
      fontSize: ' 11px',
      lineHeight: '0px'
    },
    container: {
      padding: theme.spacing(0, 1)
    },
    mainContainer: {
      display: 'flex'
      // paddingLeft: theme.MetricsSizes.small_x
    }
  };
});

const AccordionIcon = ({ profileIcon, userName, userEmail }: Props) => {
  const classes = useStyles({});

  return (
    <Grid direction="row" className={classes.mainContainer}>
      <img src={profileIcon} alt={'image'} />

      <Grid className={classes.container}>
        <Typography className={classes.subText}>{userName}</Typography>
        <Typography className={classes.userDetails}>{userEmail}</Typography>
      </Grid>
    </Grid>
  );
};
export default AccordionIcon;
