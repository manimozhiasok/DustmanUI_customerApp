import React from 'react';
import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({}));

function OrderSuccess() {
  const classes = useStyles();
  const theme = useTheme();

  return <Grid>OrderSuccess goes here</Grid>;
}

export default OrderSuccess;
