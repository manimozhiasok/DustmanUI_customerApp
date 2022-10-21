import React, { useContext, useEffect, useState } from 'react';
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
import { LoginDrawerContext } from 'src/contexts/LoginDrawerContext';
import { Outlet, useLocation, useMatch, useNavigate } from 'react-router';
import CloseIcon from '@material-ui/icons/Close';
import { LoginBtmImg } from 'src/Assets';
import { createBrowserHistory } from 'history';

const useStyles = makeStyles((theme: Theme) => ({
  outerContainer: {
    width: '100%'
  },
  leftContainer: {
    width: '43%'
  },
  rightContainer: {
    width: '57%'
  },
  //--------
  drawerWidth: {
    width: '520px'
  },
  loginDrawerStyle: {
    padding: theme.spacing(3.8),
    display: 'block'
  },
  imageStyle: {
    display: 'flex',
    paddingLeft: theme.spacing(7)
  }
}));

function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();
  const { isLoginDrawerOpen, closeLoginDrawer } =
    useContext(LoginDrawerContext);
  const navigateTo = useNavigate();

  const location = useLocation();
  const match = useMatch('/landing-page');

  const handleCloseIconClick = () => {
    closeLoginDrawer();
    navigateTo('/landing-page', { replace: true });
  };

  useEffect(() => {
    if (match !== null) {
      closeLoginDrawer();
    }
  }, [match]);

  return (
    <Box>
      <Grid container direction="row" className={classes.outerContainer}>
        <Grid item className={classes.leftContainer}>
          <LandingPageLeftContent />
        </Grid>
        <Grid item className={classes.rightContainer}>
          <LandingPageRightContent />
        </Grid>
        <Drawer
          open={isLoginDrawerOpen}
          anchor={'right'}
          classes={{ paper: classes.drawerWidth }}
        >
          <Grid className={classes.loginDrawerStyle}>
            <CloseIcon onClick={handleCloseIconClick} />
            <Box
              sx={{
                padding: theme.spacing(4, 10, 6, 3.8)
              }}
            >
              <Outlet />
            </Box>
            <Grid className={classes.imageStyle}>
              <img src={LoginBtmImg} alt="LoginBtmImg" />
            </Grid>
          </Grid>
        </Drawer>
      </Grid>
    </Box>
  );
}

export default LandingPage;
