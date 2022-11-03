import React from 'react';
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
      paddingLeft: theme.spacing(2.3),
      marginBottom: theme.spacing(3)
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

const PickUpAddressComponent = ({
  data
}: {
  data: any[];
  handleChange?: any;
}) => {
  const classes = useStyles();
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
                    key={item.city}
                    value={item.city}
                    id={item.id}
                    control={
                      <Radio
                        style={{ marginTop: '30px' }}
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
                  <Typography variant={'h6'} className={classes.leftContent}>
                    {item.address}, {item.pincode}
                  </Typography>
                </Grid>
              </Grid>
              {index === data.length - 1 ? '' : <Divider />}
            </>
          );
        })}
      </RadioGroup>
    </Grid>
  );
};
export default PickUpAddressComponent;
