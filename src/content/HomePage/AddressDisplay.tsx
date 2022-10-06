import React from 'react';
import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import PlaceIcon from '@material-ui/icons/Place';

const useStyles = makeStyles((theme: Theme) => ({}));

function AddressDisplay() {
  const classes = useStyles();
  const theme: Theme = useTheme();
  const address = 'no 13, 4th cross street, sakthi nagar, kilambakkam';
  return (
    <Grid>
      <PlaceIcon />
      {address}
    </Grid>
  );
}

export default AddressDisplay;
