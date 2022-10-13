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
    height: '180px',
    padding: theme.spacing(3, 0)
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
    zIndex: 1,
    left: '50px',
    top: '-10px',
    color: '#C4C4C4',
    width: theme.MetricsSizes.regular,
    height: theme.MetricsSizes.regular,
    '&:not($checked).MuiCheckbox-colorSecondary': {
      backgroundColor: '#C4C4C4',
      padding: '0px',
      borderRadius: '0px'
    },
    '&.MuiCheckbox-colorSecondary.Mui-checked': {
      backgroundColor: theme.Colors.white
    },
    '&.MuiCheckbox-colorSecondary.Mui-checked:hover': {
      backgroundColor: theme.Colors.white
    }
  },
  description: {
    paddingTop: theme.spacing(12),
    textAlign: 'center'
  },
  checkBoxContainer: {
    position: 'relative'
  }
}));

type ChooseProps = {
  onChange?: (e: any) => void;
  data?: any;
  selectedItemId?: any;
};

function ChooseCategoryComponent({
  onChange,
  data,
  selectedItemId
}: ChooseProps) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container className={classes.container}>
      {data.map((item, index) => {
        return (
          <>
            <Grid
              container
              xs={3}
              key={index}
              justifyContent="center"
              className={classes.eachItem}
            >
              <Grid className={classes.checkBoxContainer}>
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
                        className={classes.checkbox}
                      />
                      <img
                        src={item.img}
                        id={item.id}
                        alt="Image Not Found"
                        className={
                          selectedItemId === item.id
                            ? classes.imageStyle
                            : classes.image
                        }
                      />
                    </>
                  }
                />
              </Grid>
            </Grid>
          </>
        );
      })}
    </Grid>
  );
}

export default ChooseCategoryComponent;
