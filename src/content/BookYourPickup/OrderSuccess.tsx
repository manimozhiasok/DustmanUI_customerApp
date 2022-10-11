import React from 'react';
import {
  Grid,
  makeStyles,
  Theme,
  Typography,
  useTheme
} from '@material-ui/core';
import { checkImage } from 'src/Assets';

const useStyles = makeStyles((theme: Theme) => ({
  text: {
    color: theme.Colors.black,
    fontWeight: theme.fontWeight.bold,
    fontSize: theme.MetricsSizes.regular
  },
  subText: {
    color: theme.Colors.lightBlueGrey,
    fontWeight: theme.fontWeight.regular,
    fontSize: theme.MetricsSizes.small_x
  },
  mainContainer: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: 650,
    height: 303
  }
}));

function OrderSuccess() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container className={classes.mainContainer} justifyContent="center">
      <Grid item xs={12}>
        <img src={checkImage} width={'93.85px'} height={'93.85px'} />
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.text}>
          Order Successfully Placed.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.subText}>
          Your order was successfull !
          <br />
          Just wait until Dustman arrive at your home.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default OrderSuccess;
