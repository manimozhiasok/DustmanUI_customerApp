import React from 'react';
import {
  Grid,
  makeStyles,
  Theme,
  Typography,
  useTheme
} from '@material-ui/core';
import { checkImage } from 'src/Assets';

const useStyles = makeStyles((theme: Theme) => ({}));

function OrderSuccess() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container>
      <Grid item xs={12}>
        <div style={{ textAlign: 'center' }}>
          <img src={checkImage} width={'93.85px'} height={'93.85px'} />
        </div>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3" style={{ textAlign: 'center' }}>
          Order Successfully Placed.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" style={{ textAlign: 'center', marginTop: 10 }}>
          Your order was successfull !
          <br />
          Just wait until Dustman arrive at your home.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default OrderSuccess;
