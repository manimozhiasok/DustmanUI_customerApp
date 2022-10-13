import React from 'react';
import {
  Grid,
  makeStyles,
  TextareaAutosize,
  Theme,
  useTheme
} from '@material-ui/core';
import { ListItemCell, TextInputComponent } from 'src/components';

const useStyles = makeStyles((theme: Theme) => ({}));

function PickupAddress({edit}) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <Grid
        container
        spacing={2}
        // justifyContent="center"
        style={{ paddingBottom: theme.spacing(8.8) }}
      >
        <Grid item xs={12}>
          <TextInputComponent
            placeholderText="House / Flat No."
            textColor={theme.Colors.lightBlack}
            //value={edit.getValue('order_address').address_line1}
            inputHeight={theme.MetricsSizes.xl_large}
          />
        </Grid>
        <Grid item xs={12}>
          <TextInputComponent
            placeholderText="Apartment / Street Name / Area"
            textColor={theme.Colors.lightBlack}
            //value={edit.getValue('order_address').address_line2}
            inputHeight={theme.MetricsSizes.xl_large}
          />
        </Grid>
        <Grid item xs={12}>
          <TextInputComponent
            placeholderText="State"
            //value={edit.getValue('order_address').state}
            textColor={theme.Colors.lightBlack}
            inputHeight={theme.MetricsSizes.xl_large}
          />
        </Grid>
        <Grid item xs={6}>
          <TextInputComponent
            placeholderText="City"
            //value={edit.getValue('order_address').city}
            textColor={theme.Colors.lightBlack}
            inputHeight={theme.MetricsSizes.xl_large}
          />
        </Grid>
        <Grid item xs={6}>
          <TextInputComponent
            placeholderText="Pincode"
            //value={edit.getValue('order_address').pincode}
            textColor={theme.Colors.lightBlack}
            inputHeight={theme.MetricsSizes.xl_large}
          />
        </Grid>
        <Grid item xs={12}>
          <TextInputComponent
            placeholderText="Landmark"
            value={edit.getValue('order_address').landmark}
            textColor={theme.Colors.lightBlack}
            inputHeight={theme.MetricsSizes.xl_large}
          />
        </Grid>
        <Grid item xs={12}>
          <TextInputComponent
            placeholderText="Mobile Number"
            //value={edit.getValue('order_address').mobile_number}
            textColor={theme.Colors.lightBlack}
            inputHeight={theme.MetricsSizes.xl_large}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default PickupAddress;
