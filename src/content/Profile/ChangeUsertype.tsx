import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Check } from '@material-ui/icons';
import { Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import useUserInfo from 'src/hooks/useUserInfo';

const useStyles = makeStyles((theme: Theme) => {
  return {
    radio: {
      alignSelf: 'flex-start'
    },
    checkIcon: {
      color: 'white'
    },
    activeCheckIcon: {
      marginLeft: theme.MetricsSizes.regular_x
    },
    textStyle: {
      marginLeft: theme.spacing(2.5),
      fontSize: theme.MetricsSizes.small_xx + 1,
      color: theme.Colors.mediumGrey,
      fontWeight: theme.fontWeight.bold
    }
  };
});

const data = [
  { label: 'Home', value: 1 },
  { label: 'Commercial', value: 2 },
  { label: 'Industry', value: 3 }
];

export default function ChangeUsertype() {
  const { userDetails } = useUserInfo();
  const [value, setValue] = React.useState(userDetails?.user_type_id);
  const classes = useStyles();

  const handleChange = (event: any) => {
    setValue(parseInt(event.target.value));
  };

  return (
    <Grid>
      <RadioGroup value={value} onChange={handleChange}>
        {data.map((item, index) => {
          return (
            <FormControlLabel
              key={index}
              value={item.value}
              control={
                <Radio
                  icon={<Check className={classes.checkIcon} />}
                  checkedIcon={<Check className={classes.activeCheckIcon} />}
                />
              }
              label={
                <Typography className={classes.textStyle}>
                  {item.label}
                </Typography>
              }
              labelPlacement="start"
              className={classes.radio}
            />
          );
        })}
      </RadioGroup>
    </Grid>
  );
}
