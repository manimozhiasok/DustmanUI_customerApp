import React, { useContext, useEffect, useState } from 'react';
import { Box, Drawer, Grid, useTheme } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { Outlet, useLocation, useMatch, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { LoginDrawerContext } from 'src/dutmanui/contexts/LoginDrawerContext';
import CloseIcon from '@material-ui/icons/Close';
import { LoginBtmImg } from 'src/Assets';
import LandingPage from 'src/dutmanui/WebContent/LandingPage';

const useStyles = makeStyles((theme: Theme) => ({
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

const Login = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();
  const navigateTo = useNavigate();
  const { isLoginDrawerOpen, closeLoginDrawer } =
    useContext(LoginDrawerContext);

  const location = useLocation();
  const match = useMatch('/dustman');

  const handleCloseIconClick = () => {
    closeLoginDrawer();
    navigateTo('/dustman', { replace: true });
  };

  useEffect(() => {
    if (match !== null) {
      closeLoginDrawer();
    }
  }, [match]);

  return (
    <>
      <LandingPage />
      <Drawer
        open={isLoginDrawerOpen}
        anchor={'right'}
        classes={{ paper: classes.drawerWidth }}
      >
        <Grid className={classes.loginDrawerStyle}>
          <CloseIcon
            style={{ cursor: 'pointer' }}
            onClick={handleCloseIconClick}
          />
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
    </>
  );
};

export default Login;
