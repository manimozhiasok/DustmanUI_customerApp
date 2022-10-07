import React, { useEffect, useState } from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Theme,
  useTheme,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel
} from '@material-ui/core';
import {
  General,
  Paper,
  Carton,
  Cart,
  Ewaste,
  All,
  Cover,
  Iron,
  Plastic,
  Aluminium,
  Wood
} from 'src/Assets/Images';
import data from './CategoryData';

const useStyles = makeStyles((theme: Theme) => ({
  eachItem: {
    height: '220px',
    padding: theme.spacing(1, 1, 7, 4)
  },
  container: {
    height: '500px',
    overflowY: 'scroll'
  },
  image: {
    position: 'absolute'
  },
  imageStyle: {
    position: 'absolute',
    border: '5px solid red'
  },
  checkbox: {
    zIndex: 9,
    //left:'120px',
    left: '50px',
    top: '-20px'
    //background: 'green',
  },
  description: {
    // border: '1px solid blue',
    // marginTop:theme.spacing(5),
    // padding:theme.spacing(12, 0, 0, 3),
    paddingTop: theme.spacing(9),
    textAlign: 'center'
  },
  checkBoxContainer: {
    // padding: theme.spacing(5, 5),
    position: 'relative'
  }
}));
function ChooseCategoryComponent() {
  const [value, setValue] = React.useState('');
  const [selected, setSelected] = useState();

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(event.target.value);
  //   console.log('event', event.target);
  // };

  const handleClick = (e, index) => {
    setSelected(index);
    console.log('index', index);
  };

  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container className={classes.container}>
      {data.map((item, index) => {
        return (
          <>
            <Grid container xs={3} key={index} className={classes.eachItem}>
              <Grid item xs={12}>
                <div className={classes.checkBoxContainer}>
                  <FormControl>
                    <FormGroup>
                      <FormControlLabel
                        value={item.description}
                        labelPlacement="bottom"
                        label={
                          <div className={classes.description}>
                            {item.description}
                          </div>
                        }
                        control={
                          <>
                            <Checkbox
                              key={index}
                              onClick={(e) => handleClick(e, index)}
                              className={classes.checkbox}
                            />
                            <img
                              src={item.img}
                              alt="Images"
                              className={
                                selected === index
                                  ? classes.imageStyle
                                  : classes.image
                              }
                            />
                          </>
                        }
                      />
                    </FormGroup>
                  </FormControl>
                </div>
              </Grid>
            </Grid>
          </>
        );
      })}
    </Grid>
  );
}

export default ChooseCategoryComponent;
