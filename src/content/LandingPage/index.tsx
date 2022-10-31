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
import {
  btn2,
  stock,
  stock1,
  contactArrow,
  iconbox1,
  iconbox2,
  iconbox3,
  iconbox4,
  home1,
  home2,
  home3,
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  aboutPh,
  google3,
  app3,
  logo1,
  mail,
  ph,
  f1,
  f2,
  f3
} from 'src/Assets/WebImages';

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
  const match = useMatch('/dustman-home');

  const handleCloseIconClick = () => {
    closeLoginDrawer();
    navigateTo('/dustman-home', { replace: true });
  };

  useEffect(() => {
    if (match !== null) {
      closeLoginDrawer();
    }
  }, [match]);

  return (
    <>
      <div>
        {/* landing1  */}
        <div className="landing1">
          <div className="home-first">
            <p className="home-subtitle">solution for the every solution</p>
            <h1 className="home-title">
              Dustman
              <br />
              Waste
              <br />
              Management
              <br />& Recycling
            </h1>
            <p className="home-sub">
              Leader in electrical Waste Management & Recycling Solutions
            </p>
            <a onClick={handleCloseIconClick}>
              <img className="knowmore-btn" src={btn2} alt="" />
            </a>
          </div>
          <div className="home-pic">
            <img className="home-pic1" src={stock} alt="" />
            <img className="home-pic2" src={stock1} alt="" />
          </div>
        </div>
        {/*landing 2  */}
        <div className="landing2">
          <div className="round">
            <img src={iconbox1} alt="" />
            <p>TNPCB Approved</p>
          </div>

          <div className="round">
            <img src={iconbox2} alt="" />
            <p>50+ Staff Members</p>
          </div>

          <div className="round">
            <img src={iconbox3} alt="" />
            <p>Bank Support</p>
          </div>

          <div className="round">
            <img src={iconbox4} alt="" />
            <p>All Vehicle Types</p>
          </div>
        </div>
        {/* landing 3 */}
        <div className="landing3">
          <p className="home-subtitle1">Are YOU thinking</p>
          <p className="home-title1">Why Dustman</p>
          <div className="home-why">
            <div>
              <img src={home1} alt="" />
              <h3>Specialised Recycling</h3>
              <p>
                Our state-of-art recycling facility to provide sustainable and
                specialised recycling solutions. Our investment in this facility
                represents our commitment to finding better solutions for
                lighting and electronic waste as well as ways to minimize the
                impact of waste on our environment.
              </p>
            </div>
            <div>
              <img src={home2} alt="" />
              <h3>Removal & Disposal</h3>
              <p>
                Pride in providing Computer E-Waste removal services to support
                the “Go Green” IT environment. We employ the industry best
                method from the collection of E-Waste to the last point. We are
                committed to dispose all kind of E-Waste in a proper and timely
                manner.
              </p>
            </div>
            <div>
              <img src={home3} alt="" />
              <h3>Integrated Logistics</h3>
              <p>
                Logistics cost is one of he biggest factors in managing e-waste
                disposal. Due to the geographical conditions of our country, the
                logistics costs lays a huge burden on the organized sector
                working in e-waste.
              </p>
            </div>
          </div>
        </div>
        {/* landing 5*/}
        <div className="landing5">
          <div className="client-title">
            <p>OUR CLIENTS</p>
            <h3>
              Clients we
              <br />
              work for.
            </h3>
          </div>

          <div className="client-list">
            <div className="client">
              <img src={client1} alt="" />
            </div>
            <div className="client">
              <img src={client2} alt="" />
            </div>
            <div className="client">
              <img src={client3} alt="" />
            </div>
            <div className="client">
              <img src={client4} alt="" />
            </div>
            <div className="client">
              <img src={client5} alt="" />
            </div>
            <div className="client">
              <img src={client6} alt="" />
            </div>
          </div>
        </div>
        {/* landing 6 */}
        <div className="landing6">
          <img className="home-ph-image" src={aboutPh} alt="" />
          <div className="ph-text">
            <h5>Mobile apps</h5>
            <h1>
              Book your
              <br />
              pickup from
              <br />
              our App
            </h1>
            <p>
              Dedicated mobile app for Customers and Vendors. Download the app
              for exclusive deals and ease of booking.
            </p>
            <div className="play-btn">
              {/* <img src="images/111.png" alt="">  */}
              <img className="play-btn-img" src={google3} alt="" />
              <img className="play-btn-img" src={app3} alt="" />
            </div>
          </div>
        </div>
        {/* landing 7 */}
        <div className="landing7">
          <p className="pre-head">Contacts</p>
          <p className="head">Questions?</p>
          <p></p>
          <p className="get-in">Get in touch.</p>
          <p>
            <a href="contact.html">
              <button className="contact-btn">
                Contact Us <img src={contactArrow} alt="" />
              </button>
            </a>
          </p>
        </div>
      </div>
      {
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
      }
    </>
  );
}

export default LandingPage;
