
import React, { useEffect, useState } from 'react';
import { Box, Drawer, Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { Helmet } from 'react-helmet-async';
import LandingPageRightContent from './LandingPageRightContent';
import LandingPageLeftContent from './LandingPageLeftContent';
import { NoEncryption } from '@material-ui/icons';


const useStyles = makeStyles((theme: Theme) => ({

  outerContainer:{
    width: '100%',
    //background: 'linear-gradient(150deg, #FFFFFF 81.94%, #70B245 8.53%)', 
    
  },
  leftContainer:{
    width: '43%',
  },
  rightContainer:{
    width: '57%',
  }
}));
function LandingPage() {
  const classes = useStyles();
  const theme: Theme = useTheme();
  
  return (
    <Box>
    <Grid container direction="row" className={classes.outerContainer}>
      <Grid item className={classes.leftContainer}>
        <LandingPageLeftContent />
      </Grid>
      <Grid item className={classes.rightContainer}>
        <LandingPageRightContent />
      </Grid>
    </Grid>
    </Box>
  );
}

export default LandingPage;
