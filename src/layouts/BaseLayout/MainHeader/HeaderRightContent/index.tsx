import React, { useContext, useEffect, useState } from 'react';
import {
  Box,
  Grid,
  useTheme,
  Theme,
  makeStyles,
  Menu,
  MenuItem,
  ListItemText,
  Button,
  Typography
} from '@material-ui/core';
import { Helmet } from 'react-helmet-async';
import ButtonComp from './../../../../components/ButtonComp/index';
import { LoginDrawerContext } from './../../../../contexts/LoginDrawerContext';
import { useNavigate } from 'react-router';

const useStyles = makeStyles((theme: Theme) => ({
  outerContainer: {
    //alignContent: 'center',
    //justifyContent: 'flex-end'
  },
  menuPosition: {
    position: 'absolute'
  },
  headerTextStyle: {
    color: theme.Colors.blueMediumDark,
    fontSize: theme.MetricsSizes.regular,
    fontWeight: theme.fontWeight.regular,
    paddingTop: theme.spacing(2)
  }
}));
function HeaderRightContent() {
  const theme: Theme = useTheme();
  const classes = useStyles();
  const navigateTo = useNavigate();
  const { toggleLoginDrawer, isLoginDrawerOpen } =
    useContext(LoginDrawerContext);

  const handleCustomerButtonClick = () => {
    toggleLoginDrawer();
    navigateTo('/landing-page/customer-login', { replace: true });
  };
  return (
    <Grid className={classes.outerContainer}>
      <Typography className={classes.headerTextStyle}>
        Home About Us Services Gallery Contact Us
        <ButtonComp
          buttonText="Login"
          height={theme.spacing(6)}
          btnWidth={theme.spacing(21)}
          backgroundColor={theme.Colors.primary}
          btnBorderRadius={theme.MetricsSizes.tiny}
          onClickButton={handleCustomerButtonClick}
        ></ButtonComp>
      </Typography>
    </Grid>
  );
}

export default HeaderRightContent;
