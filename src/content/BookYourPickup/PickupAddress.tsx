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

function PickupAddress() {
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
            inputHeight={theme.MetricsSizes.xl_large}
          />
        </Grid>
        <Grid item xs={12}>
          <TextInputComponent
            placeholderText="Apartment / Street Name / Area"
            textColor={theme.Colors.lightBlack}
            inputHeight={theme.MetricsSizes.xl_large}
          />
        </Grid>
        <Grid item xs={12}>
          <TextInputComponent
            placeholderText="State"
            textColor={theme.Colors.lightBlack}
            inputHeight={theme.MetricsSizes.xl_large}
          />
        </Grid>
        <Grid item xs={6}>
          <TextInputComponent
            placeholderText="City"
            textColor={theme.Colors.lightBlack}
            inputHeight={theme.MetricsSizes.xl_large}
          />
        </Grid>
        <Grid item xs={6}>
          <TextInputComponent
            placeholderText="Pincode"
            textColor={theme.Colors.lightBlack}
            inputHeight={theme.MetricsSizes.xl_large}
          />
        </Grid>
        <Grid item xs={12}>
          <TextInputComponent
            placeholderText="Landmark"
            textColor={theme.Colors.lightBlack}
            inputHeight={theme.MetricsSizes.xl_large}
          />
        </Grid>
        <Grid item xs={12}>
          <TextInputComponent
            placeholderText="Mobile Number"
            textColor={theme.Colors.lightBlack}
            inputHeight={theme.MetricsSizes.xl_large}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default PickupAddress;
