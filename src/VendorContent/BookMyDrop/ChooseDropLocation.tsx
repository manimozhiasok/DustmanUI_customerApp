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
import React from 'react';

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

const ChooseDropLocation = ({data}) => {
  const classes = useStyles();
  // const data = [
  //   {
  //     id: '1',
  //     dustman_location: ' Ambattur',
  //     address_line1: 'No 13, 4th cross st,',
  //     address_line2:' sakthi nagar,',
  //     address_line3: ' kilambakkam, chennai.'
  //   },
  //   {
  //     id: '2',
  //     dustman_location: 'kilambakkam, chennai.',
  //     address_line1: 'No 13, 4th cross st,',
  //     address_line2:'sakthi nagar,',
  //     address_line3: 'Sriberambadur '
  //   },
  //   {
  //     id: '4',
  //     dustman_location: 'poonamallee',
  //     address_line1: 'No 13, 4th cross st',
  //     address_line2: ' sakthi nagar,',
  //     address_line3: ' kilambakkam, chennai.'
  //   }
  // ];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event, 'from handleChange');
  };

  return (
    <Grid container>
      <RadioGroup>
        {data.map((item, index) => {
          return (
            <>
              <Grid container key={index}>
                <Grid item xs={12}>
                  <FormControlLabel
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                    labelPlacement="start"
                    key={item.dustman_location}
                    value={item.dustman_location}
                    id={item.id}
                    control={
                      <Radio
                        style={{ marginTop: '30px' }}
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
                <Grid item xs={12}>
                  <Typography variant={'h6'} className={classes.leftContent}>
                    {item.address_line1}, {item.address_line2}, {item.address_line3}
                  </Typography>
                </Grid>
                <Grid item xs={11}>
                  <Typography variant={'h6'} className={classes.leftContent}>
                  {item.dustman_location}, {item.city}
                  </Typography>
                </Grid>
                <Grid item xs={1} container justifyContent="flex-end">
                  <img
                    src={locationIcon}
                    width={'20.38px'}
                    height={'15.75px'}
                  />
                  <Typography className={classes.mapStyle}>view Map</Typography>
                </Grid>
              </Grid>
              <Divider className={classes.dividerStyle} />
            </>
          );
        })}
      </RadioGroup>
    </Grid>
  );
};

export default ChooseDropLocation;
