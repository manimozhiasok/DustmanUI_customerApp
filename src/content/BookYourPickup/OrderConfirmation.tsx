import React from 'react';
import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({}));

function OrderConfirmation() {
  const classes = useStyles();
  const theme = useTheme();

  return <Grid>OrderConfirmation goes here</Grid>;
}

export default OrderConfirmation;
