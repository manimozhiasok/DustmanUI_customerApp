import React, { useContext } from 'react';
import {
  Box,
  Drawer,
  Grid,
  makeStyles,
  Theme,
  useTheme
} from '@material-ui/core';
import LandingPageRightContent from './LandingPageRightContent';
import LandingPageLeftContent from './LandingPageLeftContent';
import Login from '../Login';
import { LoginDrawerContext } from 'src/contexts/LoginDrawerContext';

const useStyles = makeStyles((theme: Theme) => ({
  outerContainer: {
    width: '100%'
  },
  leftContainer: {
    width: '43%'
  },
  rightContainer: {
    width: '57%'
  }
}));

function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();
  const { isLoginDrawerOpen, closeLoginDrawer } =
    useContext(LoginDrawerContext);
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
      <Drawer open={isLoginDrawerOpen} anchor={'right'}>
        <Login />
      </Drawer>
    </Box>
  );
}

export default LandingPage;
