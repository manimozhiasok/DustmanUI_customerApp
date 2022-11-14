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
import useUserInfo from 'src/hooks/useUserInfo';
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
  const { userAddressDetails } = useUserInfo();
  const address =
    userAddressDetails[0]?.address_line1 +
    ', ' +
    userAddressDetails[0]?.address_line2 +
    ', ' +
    userAddressDetails[0]?.address_line3 +
    ', ' +
    userAddressDetails[0]?.city +
    ', ' +
    userAddressDetails[0]?.state;

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
