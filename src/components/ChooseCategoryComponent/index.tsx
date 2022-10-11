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
    left: '50px',
    top: '-20px',
    color: "#C4C4C4",
    fill: 'red',
    "&:not($checked) .MuiIconButton-label:after": {
      backgroundColor: "pink",
    }
  },
  description: {
    paddingTop: theme.spacing(9),
    textAlign: 'center'
  },
  checkBoxContainer: {
    position: 'relative'
  }
}));

type ChooseProps = {
  onChange?: (e: any) => void;
  data?: any;
};

function ChooseCategoryComponent({ onChange, data }: ChooseProps) {

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
                              value={item.description}
                              name={item.description}
                              id={item.id}
                              onChange={onChange}
                              // iconStyle={{fill: 'white'}}
                              className={classes.checkbox}
                            />
                            <img
                              src={item.img}
                              id={item.id}
                              alt="Image Not Found"
                              className={classes.image}
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
