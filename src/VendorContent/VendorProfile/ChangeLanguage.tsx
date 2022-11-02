import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Check } from '@material-ui/icons';
import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';

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
    }
  };
});

const data = [
  { id: 1, label: 'English', value: 'english' },
  { id: 2, label: 'தமிழ்', value: 'tamil' },
  { id: 3, label: 'Hindi', value: 'hindi' }
];

export default function ChangeLanguage() {
  const [value, setValue] = React.useState('');
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <Grid>
      <RadioGroup
        aria-label="language"
        name="language1"
        value={value}
        onChange={handleChange}
      >
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
              label={item.label}
              labelPlacement="start"
              className={classes.radio}
            />
          );
        })}
      </RadioGroup>
    </Grid>
  );
}
