import React from 'react';
import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { TextInputComponent } from 'src/components';

const useStyles = makeStyles((theme: Theme) => ({}));

function PickupAddress({ edit }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <Grid container spacing={2} style={{ paddingBottom: theme.spacing(8.8) }}>
        <Grid item xs={12}>
          <TextInputComponent
            placeholderText="House / Flat No."
            textColor={theme.Colors.lightBlack}
            value={edit.getValue('order_address').address_line1}
            onChange={(e) =>
              edit.update({
                order_address: {
                  ...edit.edits.order_address,
                  address_line1: e.target.value
                }
              })
            }
            inputHeight={theme.MetricsSizes.xl_large}
          />
        </Grid>
        <Grid item xs={12}>
          <TextInputComponent
            placeholderText="Apartment / Street Name / Area"
            textColor={theme.Colors.lightBlack}
            value={edit.getValue('order_address').address_line2}
            onChange={(e) =>
              edit.update({
                order_address: {
                  ...edit.edits.order_address,
                  address_line2: e.target.value
                }
              })
            }
            inputHeight={theme.MetricsSizes.xl_large}
          />
        </Grid>
        <Grid item xs={12}>
          <TextInputComponent
            placeholderText="State"
            value={edit.getValue('order_address').state}
            onChange={(e) =>
              edit.update({
                order_address: {
                  ...edit.edits.order_address,
                  state: e.target.value
                }
              })
            }
            textColor={theme.Colors.lightBlack}
            inputHeight={theme.MetricsSizes.xl_large}
          />
        </Grid>
        <Grid item xs={6}>
          <TextInputComponent
            placeholderText="City"
            value={edit.getValue('order_address').city}
            onChange={(e) =>
              edit.update({
                order_address: {
                  ...edit.edits.order_address,
                  city: e.target.value
                }
              })
            }
            textColor={theme.Colors.lightBlack}
            inputHeight={theme.MetricsSizes.xl_large}
          />
        </Grid>
        <Grid item xs={6}>
          <TextInputComponent
            placeholderText="Pincode"
            value={edit.getValue('pincode')}
            textColor={theme.Colors.lightBlack}
            inputHeight={theme.MetricsSizes.xl_large}
            onChange={(e) =>
              edit.update({
                order_address: {
                  ...edit.edits.order_address,
                  pincode: e.target.value
                }
              })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextInputComponent
            placeholderText="Landmark"
            value={edit.getValue('order_address').address_line3}
            textColor={theme.Colors.lightBlack}
            inputHeight={theme.MetricsSizes.xl_large}
            onChange={(e) =>
              edit.update({
                order_address: {
                  ...edit.edits.order_address,
                  address_line3: e.target.value
                }
              })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextInputComponent
            placeholderText="Mobile Number"
            value={edit.getValue('mobile_number')}
            onChange={(e) =>
              edit.update({
                order_address: {
                  ...edit.edits.order_address,
                  mobile_number: e.target.value
                }
              })
            }
            textColor={theme.Colors.lightBlack}
            inputHeight={theme.MetricsSizes.xl_large}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default PickupAddress;
