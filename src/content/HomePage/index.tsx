import React, { useEffect, useState } from 'react';
import { Box, Grid, makeStyles, Tab, Tabs, Theme, useTheme } from '@material-ui/core';
import PlaceIcon from '@material-ui/icons/Place';


const useStyles = makeStyles((theme: Theme) => ({

  outerContainer:{
    width: '100%',
    padding: theme.spacing(3,12,12,11),
  },
  contentContainer: {
    border: '1px solid blue'
  }, 
  imageContainer:{
    border: '1px solid red'
  },
  tabContainer:{
    border: '1px solid red'
  },
  addressContainer: {
    padding: theme.spacing(4,0,4,0),
  },
  tabContent: {
    textTransform: 'capitalize',
    color: theme.Colors.primary,
    fontSize: theme.MetricsSizes.regular,
    fontWeight: theme.fontWeight.bold,
  }
 
}));
function HomePage() {
  const classes = useStyles();
  const theme: Theme = useTheme();
  const address = "no 13, 4th cross street, sakthi nagar, kilambakkam";
  return (
    <Grid className={classes.outerContainer}>
      <Grid container direction="row" className={classes.contentContainer}>
      <Grid item xs={8} className={classes.addressContainer}>
          <PlaceIcon />{address}
        </Grid>
        <Grid item xs={8} className={classes.tabContainer}>
          <Tabs>
              <Tab label="Book Your Pickup" className={classes.tabContent}></Tab>
              <Tab label="Orders" className={classes.tabContent}></Tab>
              <Tab label="Profile" className={classes.tabContent}></Tab>
          </Tabs>
        </Grid>
        <Grid item xs={4} className={classes.imageContainer}>
          
        </Grid>
        

      </Grid> 
    </Grid>
  );
}

export default HomePage;
