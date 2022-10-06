import React from 'react';
import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({}));

function PickupAddress() {
  const classes = useStyles();
  const theme = useTheme();

  return <Grid>PickupAddress goes here</Grid>;
}

export default PickupAddress;
