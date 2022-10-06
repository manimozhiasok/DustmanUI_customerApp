import React from 'react';
import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({}));

function ChooseCategoryComponent() {
  const classes = useStyles();
  const theme = useTheme();

  return <Grid>ChooseCategoryComponent goes Here</Grid>;
}

export default ChooseCategoryComponent;
