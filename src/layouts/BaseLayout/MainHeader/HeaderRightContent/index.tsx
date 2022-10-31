import React, { useContext } from 'react';
import {
  Box,
  Grid,
  useTheme,
  Theme,
  makeStyles,
  Typography
} from '@material-ui/core';
import ButtonComp from './../../../../components/ButtonComp/index';
import { LoginDrawerContext } from './../../../../contexts/LoginDrawerContext';
import { useNavigate } from 'react-router';
import '../../../../newstyle.css';
import { Logo, DropDown } from 'src/Assets/WebImages';
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
  const theme = useTheme();
  const classes = useStyles();
  const navigateTo = useNavigate();
  const { toggleLoginDrawer, isLoginDrawerOpen } =
    useContext(LoginDrawerContext);

  const handleCustomerButtonClick = () => {
    toggleLoginDrawer();
    navigateTo('/dustman/login', { replace: true });
  };
  function showLoginOptions() {
    console.log('Clicked on login');
    document.getElementById('login-list').classList.toggle('show');
  }
  return (
    // <Grid container className={classes.outerContainer}>
    //   <Typography className={classes.headerTextStyle}>
    //     Home About Us Services Gallery Contact Us
    //     <ButtonComp
    //       buttonText="Login"
    //       height={theme.spacing(6)}
    //       btnWidth={theme.spacing(21)}
    //       backgroundColor={theme.Colors.primary}
    //       btnBorderRadius={theme.MetricsSizes.tiny}
    //       onClickButton={handleCustomerButtonClick}
    //     ></ButtonComp>
    //   </Typography>
    // </Grid>
    <>
      <div className="backfill"></div>
      <nav className="navbar">
        <div>
          <img className="logo" src={Logo} alt="logo" />{' '}
        </div>
        <div className="navigation-bar">
          <ul className="nav-list" id="navi-list">
            <li className="list-item">
              <a className="current-page" href="index.html">
                Home
              </a>
            </li>
            <li className="list-item">
              <a href="./about.html">About Us</a>
            </li>
            <li className="list-item">
              <a href="other.html">Services</a>
            </li>
            <li className="list-item">
              <a href="gallery.html">Gallery</a>
            </li>
            <li className="list-item">
              <a href="contact.html">Contact Us</a>
            </li>
          </ul>
          <div className="empty"></div>
          <div className="login-item">
            <button
              className="login-btn"
              id="login-btn"
              onClick={showLoginOptions}
            >
              Log in
              <img src={DropDown} />
            </button>
            <div className="login-list" id="login-list">
              <a onClick={handleCustomerButtonClick}>Customer</a>
              <a href="#">Vendor</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HeaderRightContent;
