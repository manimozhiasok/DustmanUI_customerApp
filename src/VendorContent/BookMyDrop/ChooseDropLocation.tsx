import {
  Divider,
  FormControlLabel,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
  Theme,
  Typography
} from '@material-ui/core';
import { locationIcon } from 'src/Assets';
import React, { useState } from 'react';
import useVendorInfo from 'src/hooks/useVendorInfo';

const useStyles = makeStyles((theme: Theme) => {
  return {
    radioLableStyle: {
      fontSize: theme.MetricsSizes.small_xxx - 1,
      color: theme.Colors.blueDark,
      fontWeight: theme.fontWeight.mediumBold,
      paddingTop: theme.MetricsSizes.medium_xx
    },
    leftContent: {
      color: theme.Colors.darkGrey,
      fontWeight: theme.fontWeight.medium,
      paddingLeft: theme.spacing(2.3)
    },
    radio: {
      marginTop: theme.MetricsSizes.medium_xx,
      '&.MuiRadio-colorSecondary.Mui-checked': {
        color: theme.Colors.orangePrimary
      }
    },
    dividerStyle: {
      marginLeft: theme.MetricsSizes.small_xxx,
      marginTop: theme.MetricsSizes.medium_xx
    },
    mapStyle: {
      fontSize: theme.MetricsSizes.tiny_xx,
      color: theme.Colors.blackPrimary,
      marginTop: theme.MetricsSizes.tiny_x
    }
  };
});

const ChooseDropLocation = ({ data, edit, handleChangeAddress }) => {
  const { vendorAddressDetails } = useVendorInfo();
  const [selectedValue, setSelectedValue] = useState(0);
  const classes = useStyles();

  const handleChange = (event: any) => {
    setSelectedValue(parseInt(event.target.value));
    handleChangeAddress(parseInt(event.target.value));
  };

  return (
    <Grid container>
      <RadioGroup>
        {vendorAddressDetails?.length
          ? vendorAddressDetails.map((item, index) => {
              return (
                <>
                  <Grid container key={index}>
                    <Grid item xs={12}>
                      <FormControlLabel
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between'
                        }}
                        labelPlacement="start"
                        key={item.dustman_location}
                        value={item.id}
                        control={
                          <Radio
                            checked={selectedValue === item.id}
                            className={classes.radio}
                            onChange={handleChange}
                          />
                        }
                        label={
                          <Typography className={classes.radioLableStyle}>
                            {item.city}
                          </Typography>
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant={'h6'}
                        className={classes.leftContent}
                      >
                        {item.address}
                      </Typography>
                    </Grid>
                    <Grid item xs={11}>
                      <Typography
                        variant={'h6'}
                        className={classes.leftContent}
                      >
                        {item.city}
                      </Typography>
                    </Grid>
                    <Grid item xs={1} container justifyContent="flex-end">
                      <img
                        src={locationIcon}
                        width={'20.38px'}
                        height={'15.75px'}
                      />
                      <Typography className={classes.mapStyle}>
                        view Map
                      </Typography>
                    </Grid>
                  </Grid>
                  {index === vendorAddressDetails?.length - 1 ? null : (
                    <Divider className={classes.dividerStyle} />
                  )}
                </>
              );
            })
          : null}
      </RadioGroup>
    </Grid>
  );
};

export default ChooseDropLocation;
