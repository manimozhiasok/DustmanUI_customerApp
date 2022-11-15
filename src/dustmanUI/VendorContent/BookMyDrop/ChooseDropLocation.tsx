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
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) => {
  return {
    radioLabelStyle: {
      fontSize: theme.MetricsSizes.small_xxx,
      color: theme.Colors.blueDark,
      fontWeight: theme.fontWeight.bold,
      paddingBottom: theme.MetricsSizes.small
    },
    leftContent: {
      color: theme.Colors.darkGrey,
      fontWeight: theme.fontWeight.regular,
      paddingLeft: theme.spacing(2.3)
    },
    radio: {
      marginBottom: theme.MetricsSizes.regular_x,
      marginRight: theme.MetricsSizes.tiny,
      '&.MuiRadio-colorSecondary.Mui-checked': {
        color: theme.Colors.orangePrimary
      }
    },
    dividerStyle: {
      marginLeft: theme.MetricsSizes.small_xxx,
      margin: theme.spacing(3, 0)
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
      alignItems: 'end',
      justifyContent: 'space-evenly',
      paddingLeft: theme.MetricsSizes.regular
    }
  };
});

const ChooseDropLocation = ({ data, edit, handleChangeAddress }) => {
  const [selectedValue, setSelectedValue] = useState(0);
  const { t } = useTranslation();
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
                      <Typography className={classes.radioLabelStyle}>
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
                    width={'30.38px'}
                    height={'24.75px'}
                  />
                  <Typography className={classes.mapStyle}>
                    {t('viewMap')}
                  </Typography>
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
