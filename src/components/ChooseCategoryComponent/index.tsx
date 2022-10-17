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
import { light } from '@material-ui/core/styles/createPalette';

const useStyles = makeStyles((theme: Theme) => ({
  eachItem: {
    //height: '180px',
    //width: '500px',
    padding: theme.spacing(3, 0)
  },
  container: {
    //height: '500px',
    //width: '100%',
    overflowY: 'scroll'
  },
  checkbox: {
    zIndex: 1,
    left: '50px',
    top: '10px',
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
    paddingTop: theme.spacing(1),
    textAlign: 'center'
  },
  checkBoxContainer: {
    position: 'relative',
    width: '100%',
    paddingRight: theme.spacing(10)
  }
}));

type ChooseProps = {
  onChange?: (e: any) => void;
  data?: any;
  selectedItemId?: any[];
  activeBorderColor?: any;
};

function ChooseCategoryComponent({
  onChange,
  data,
  selectedItemId,
  activeBorderColor
}: ChooseProps) {
  const classes = useStyles();
  const theme = useTheme();

  const getBorderColor = (isActive: boolean) => {
    if (isActive) {
      return activeBorderColor || theme.Colors.secondary;
    }
    return theme.Colors.white;
  };

  return (
    <Grid container spacing={4} className={classes.container}>
      {data.map((item, index) => {
        const findActiveImage: number = selectedItemId.findIndex(
          (id) => id > item.id
        );
        
        console.log('findIndex',findActiveImage);
        console.log('item.id',item.id);
        const isActive: boolean = findActiveImage !== -1;
        console.log('isActive',isActive);
        
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
                  value={item.name}
                  labelPlacement="bottom"
                  label={
                    <div className={classes.description}>
                      {item.name}
                    </div>
                  }
                  control={
                    <>
                      <Checkbox
                        key={index}
                        value={item.name}
                        id={item.id}
                        onChange={onChange}
                        className={classes.checkbox}
                      />
                      <img
                        src={item.image_url}
                        id={item.id}
                        key={index}
                        alt="Image Not Found"
                        style={{
                          // position: 'absolute',
                          borderWidth: '1px',
                          borderColor: getBorderColor(isActive),
                          borderStyle: 'solid',
                          borderRadius: '6px',
                          width: '100px',
                          height: '100px',
                        }}
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
