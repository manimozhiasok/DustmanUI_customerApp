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
      color: theme.Colors.darkGrey,
      fontWeight: theme.fontWeight.mediumBold
    },
    gridStyle: {
      paddingLeft: theme.spacing(3.8),
      paddingTop: theme.spacing(2)
    },
    leftContent: {
      color: theme.Colors.darkBlue,
      fontWeight: theme.fontWeight.medium
    },
    rightContent: {
      color: theme.Colors.mediumGrey,
      fontWeight: theme.fontWeight.regular
    },
    formStyle: {},
    dividerStyle: {
      padding: theme.spacing(2)
    },
    radioLableAlign: {
      justifyItems: 'right'
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
    <>
      <Grid container>
        <RadioGroup>
          {data.map((item, index) => {
            return (
              <>
                <FormControlLabel
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                  key={item.address}
                  value={item.address}
                  id={item.id}
                  labelPlacement="start"
                  control={
                    <Radio
                      onChange={handleChange}
                      className={classes.radioLableAlign}
                    />
                  }
                  label={
                    <Typography className={classes.radioLableStyle}>
                      {item.address}
                    </Typography>
                  }
                  className={classes.formStyle}
                />

                <Grid container className={classes.gridStyle}>
                  <Grid item xs={2}>
                    <img src={item.image} />
                  </Grid>
                  <Grid item xs={9}>
                    <Typography>{item.description}</Typography>
                  </Grid>
                </Grid>

                {index === data.length - 1 ? '' : <Divider />}
              </>
            );
          })}
        </RadioGroup>
      </Grid>
    </>
  );
};
export default PickUpAddressComponent;
