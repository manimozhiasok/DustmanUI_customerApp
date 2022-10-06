import React from 'react';
import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({}));

function TrashDetails() {
  const classes = useStyles();
  const theme = useTheme();

  return <Grid>TrashDetails</Grid>;
}

export default TrashDetails;
