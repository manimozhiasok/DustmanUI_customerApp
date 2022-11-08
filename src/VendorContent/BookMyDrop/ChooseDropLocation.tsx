import {
  Divider,
  FormControlLabel,
  Grid,
  makeStyles,
  Radio,
  Theme,
  Typography
} from '@material-ui/core';
import { locationIcon } from 'src/Assets';
import React, { useState } from 'react';

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
      marginRight: theme.MetricsSizes.tiny_xx,
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
    },
    imageStyle: {
      display: 'flex',
      alignContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: theme.MetricsSizes.regular
    }
  };
});

const ChooseDropLocation = ({ data, edit, handleChangeAddress }) => {
  const [selectedValue, setSelectedValue] = useState(0);
  const classes = useStyles();

  const handleChange = (event: any) => {
    setSelectedValue(parseInt(event.target.value));
    handleChangeAddress(parseInt(event.target.value));
  };

  return (
    <Grid>
      {data?.length
        ? data.map((item, index) => {
            return (
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
                        {item.dustman_location}
                      </Typography>
                    }
                  />
                </Grid>
                <Grid item xs={11}>
                  <Typography variant={'h6'} className={classes.leftContent}>
                    {item.address_line1}, {item.address_line2},{' '}
                    {item.address_line3}
                  </Typography>
                  <Typography variant={'h6'} className={classes.leftContent}>
                    {item.dustman_location}, {item.city}
                  </Typography>
                </Grid>
                <Grid item xs={1} className={classes.imageStyle}>
                  <img
                    src={locationIcon}
                    width={'20.38px'}
                    height={'18.75px'}
                  />
                  <Typography className={classes.mapStyle}>view Map</Typography>
                </Grid>
                <Grid item xs={12}>
                  {index === data?.length - 1 ? null : (
                    <Divider className={classes.dividerStyle} />
                  )}
                </Grid>
              </Grid>
            );
          })
        : null}
    </Grid>
  );
};

export default ChooseDropLocation;
