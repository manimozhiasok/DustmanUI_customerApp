import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Check } from '@material-ui/icons';
import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
    return {
        radio:{
            alignSelf: "flex-start"
        },
        checkIcon:{
           color: "white"
        },
        activeCheckIcon:{
          marginLeft: 10
        },
        radioGroupStyle:{
          marginLeft: 29
        }
    };
  });

  const data = [
    { id: 1, 
      label: 'Home',
      value: 'home' 
    },
    { id: 2, 
      label: 'Commercial',
      value: 'commercial' 
    },,
    { id: 3, 
      label: 'Industry',
      value: 'industry' 
    },
  ];

export default function ChangeUsertype() {
  const [value, setValue] = React.useState('');
  const theme = useTheme();
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (

    <Grid>
      <RadioGroup 
        aria-label="type"
        name="type1"
        value={value}
        onChange={handleChange}  
        className={classes.radioGroupStyle}     
      >
    {data.map((item, index) => {
      return(
        <FormControlLabel
          key={index}
          value={item.value}
          control={<Radio icon={<Check className={classes.checkIcon}/>} checkedIcon={<Check className={classes.activeCheckIcon}/>} />}  
          label={item.label}
          labelPlacement="start"
          className={classes.radio} 
        />
        )
       })}
      </RadioGroup>
     </Grid>
  );
}
