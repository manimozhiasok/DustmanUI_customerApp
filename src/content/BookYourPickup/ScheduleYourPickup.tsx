import React from 'react';
import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({}));

function ScheduleYourPickup() {
  const classes = useStyles();
  const theme = useTheme();

  return <Grid>ScheduleYourPickup goes here</Grid>;
}

export default ScheduleYourPickup;
