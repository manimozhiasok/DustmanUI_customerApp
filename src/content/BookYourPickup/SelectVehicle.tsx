import React from 'react';
import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({}));

function SelectVehicle() {
  const classes = useStyles();
  const theme = useTheme();

  return <Grid>SelectVehicle goes here</Grid>;
}

export default SelectVehicle;
