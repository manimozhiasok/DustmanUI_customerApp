import React from 'react';
import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { ChooseCategoryComponent } from 'src/components';

const useStyles = makeStyles((theme: Theme) => ({}));

function ChooseCategory() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid>
      <ChooseCategoryComponent />,
    </Grid>
  );
}

export default ChooseCategory;
