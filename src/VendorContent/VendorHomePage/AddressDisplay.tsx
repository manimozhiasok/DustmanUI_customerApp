import React from 'react';
import {
  Grid,
  makeStyles,
  Theme,
  Typography,
  useTheme
} from '@material-ui/core';
import { PlaceMaker } from 'src/Assets';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) => ({
  addressStyle: {
    padding: theme.spacing(1, 1),
    color: theme.Colors.lightBlueGrey
  },
  iconStyle: {
    padding: theme.spacing(0.5, 0)
  }
}));

function AddressDisplay() {
  const classes = useStyles();
  const theme = useTheme();
  const address = 'no 13, 4th cross street, sakthi nagar, kilambakkam';
  return (
    <Grid container direction="row">
      <PlaceMaker />
      <Typography variant="subtitle2" className={classes.addressStyle}>
        {address}
      </Typography>
      {/* <Grid className={classes.iconStyle}>
        <ExpandMoreIcon />
      </Grid> */}
    </Grid>
  );
}

export default AddressDisplay;
