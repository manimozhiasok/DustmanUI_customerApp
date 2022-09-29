
import React, { useEffect, useState } from 'react';
import { Box, Grid, useTheme , Theme, makeStyles, Menu, MenuItem, ListItemText} from '@material-ui/core';
import { Helmet } from 'react-helmet-async';
import ButtonComp from './../../../../components/ButtonComp/index';


const useStyles = makeStyles((theme: Theme) => ({
  outerContainer: {
     //alignContent: 'center',
     //justifyContent: 'flex-end'
  },
  menuPosition: {
    position: 'absolute',
  }
}));
function HeaderRightContent() {
  const theme: Theme = useTheme();
  const classes = useStyles();
  
  const handleCustomerButtonClick = () => {
    
  };
  return (
    <Grid className={classes.outerContainer}>
       <ButtonComp    
          aria-controls="login-button-menu"
          aria-haspopup="true"      
          buttonText='Login'
          height={theme.spacing(6)}
          btnWidth={theme.spacing(21)}  
          backgroundColor={theme.Colors.primary}
          btnBorderRadius={theme.MetricsSizes.tiny}     
          onClickButton={handleCustomerButtonClick}
        >
          </ButtonComp>
  
        
    </Grid>
  );
}

export default HeaderRightContent;
