
import React, { Fragment, useEffect, useState } from 'react';
import { Box, Grid, makeStyles, Theme, Typography, useTheme, Button } from '@material-ui/core';
import { Helmet } from 'react-helmet-async';
import {LandingPageArc} from 'src/Assets/Images'
import { ButtonComp } from 'src/components';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {PatternDotted} from 'src/Assets/Images';

const useStyles = makeStyles((theme: Theme) => ({
  outerContainer: {
      padding: theme.spacing(12.5,0,0,12.5),  
      
      
      
  },
  captionStyle: {
    fontWeight: theme.fontWeight.medium,
    fontSize: theme.MetricsSizes.small_xx,
    textTransform: 'uppercase',
    color: theme.Colors.blueMediumDark,
  },
  titleStyle: {
    //fontFamily: 'Space Grotesk',
    //fontSize: theme.MetricsSizes.xx_large,
    //fontWeight: theme.fontWeight.bold
    fontSize: 42,
    fontWeight: 700,
  },
  subTitleStyle: {
    color: theme.Colors.blueMediumDark,
    fontSize: theme.MetricsSizes.regular,
    fontWeight: theme.fontWeight.regular,
    lineHeight: '28px',
    paddingTop: theme.spacing(2),
  },
  imageArcPosition: {
    maxHeight: theme.spacing(50),
    maxWidth: theme.spacing(50),
    position: 'absolute',
  },
  buttonContainer: {
    paddingTop: theme.spacing(3),
  }
}));

function LandingPageLeftContent() {

  const theme: Theme = useTheme();
  const classes = useStyles();
  
  return (
    <>
    <img src={LandingPageArc} alt="Arc Image" className={classes.imageArcPosition}/>
    <Grid  className={classes.outerContainer}>
        <Typography className={classes.captionStyle}>solution for the every pollution</Typography>
        <Typography className={classes.titleStyle}><Fragment>Dustman <br/> Waste <br/> Management <br/> & Recycling</Fragment></Typography>
        <Typography className={classes.subTitleStyle}><Fragment>Leader in electrical Waste Management & <br/> Recycling Solutions</Fragment></Typography>
        <Box className={classes.buttonContainer}>
        <ButtonComp
          buttonText='Know More'
          height={theme.spacing(6)}
          btnWidth={theme.spacing(21)}  
          backgroundColor={theme.Colors.primary}     
          iconImage={<ArrowForwardIcon />}   
        ></ButtonComp>
        <img src={PatternDotted} alt="Pattern Image" className={classes.imageArcPosition}/>
        </Box>
    </Grid>
    </>
  );
}

export default LandingPageLeftContent;
