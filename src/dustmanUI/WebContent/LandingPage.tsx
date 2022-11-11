import React, { useContext, useEffect, useState } from 'react';
import {
  Box,
  Drawer,
  Grid,
  makeStyles,
  Theme,
  useTheme
} from '@material-ui/core';
import { LoginDrawerContext } from 'src/dustmanUI/contexts/LoginDrawerContext';
import {
  Outlet,
  useLocation,
  useMatch,
  useNavigate,
  Pathname
} from 'react-router';
import CloseIcon from '@material-ui/icons/Close';
import { home4, home6, home7, LoginBtmImg } from 'src/Assets';
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
} from 'src/Assets';
import './website.css';
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
  // const { isLoginDrawerOpen, closeLoginDrawer } =
  //   useContext(LoginDrawerContext);
  const navigateTo = useNavigate();

  const location = useLocation();
  // const match = useMatch('/dustman');

  // const handleCloseIconClick = () => {
  //   closeLoginDrawer();
  //   navigateTo('/dustman', { replace: true });
  // };

  const handleClickNavigation = (url: Pathname) => {
    navigateTo(url);
  };

  // useEffect(() => {
  //   if (match !== null) {
  //     closeLoginDrawer();
  //   }
  // }, [match]);

  // var li_elements: any = document.querySelectorAll('.wrapper_left ul li');
  // var item_elements: any = document.querySelectorAll('.item');

  // for (var i = 0; i <div li_elements.length; i++) {
  //   li_elements[i].addEventListener('click', function () {
  //     console.log('Clicked a li option');
  //     li_elements.forEach(function (li) {
  //       li.classList.remove('active');
  //     });

  //     this.classList.add('active');
  //     var li_value: any = this.getAttribute('data-li');
  //     item_elements.forEach(function (item) {
  //       item.style.display = 'none';
  //     });
  //     let liQuery: any = document.querySelector('.' + li_value);
  //     if (li_value == 'cer-recycle') {
  //       liQuery.style.display = 'block';
  //     } else if (li_value == 'data-dest') {
  //       liQuery.style.display = 'block';
  //     } else if (li_value == 'it-refur') {
  //       liQuery.style.display = 'block';
  //     } else if (li_value == 'ewaste') {
  //       liQuery.style.display = 'block';
  //     } else if (li_value == 'doorto') {
  //       liQuery.style.display = 'block';
  //     } else if (li_value == 'reportto') {
  //       liQuery.style.display = 'block';
  //     } else {
  //       console.log('');
  //     }
  //   });
  // }

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
            <a onClick={() => handleClickNavigation('/dustman/about-us')}>
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
        {/* landing 4 */}
        <div className="landing4">
          <div className="home-left">
            <img src={home4} alt="" />
            <img className="cap1" src={home6} alt="" />
            <img className="cap2" src={home7} alt="" />
          </div>

          <div className="home-right">
            <div className="right-text">
              <p>We are specialists in</p>
              <h2 className="home-title1">What We Do</h2>
            </div>
            <div className="wrapper_left">
              <ul>
                <li data-li="cer-recycle" className="active">
                  <p>Certified Recycling</p>
                </li>
                <li data-li="data-dest">
                  <p>Data Destruction</p>
                </li>
                <li data-li="it-refur">
                  <p>IT Refurbish</p>
                </li>
                <li data-li="ewaste">
                  <p>E-Waste Scrap</p>
                </li>
                <li data-li="doorto">
                  <p>Door To Door</p>
                </li>
                <li data-li="reportto">
                  <p>Report To Customers</p>
                </li>
              </ul>
            </div>

            <div className="wrapper_right">
              <div className="item cer-recycle">
                <h3>Certified Recycling</h3>
                <p className="psg">
                  We provide a 'Green Certificate' or a 'Destruction
                  Certificate' to each of our clients after the safe disposal of
                  their e-waste.
                </p>
              </div>
              <div className="item data-dest" style={{ display: 'none' }}>
                <h3>Data Destruction</h3>
                <p className="psg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores numquam, molestias eius consequuntur deserunt non modi
                  repudiandae id aspernatur alias?
                </p>
              </div>
              <div className="item it-refur" style={{ display: 'none' }}>
                <h3>IT Refurbish</h3>
                <p className="psg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  labore excepturi voluptas voluptatem at quisquam quo
                  voluptatibus sit?
                </p>
              </div>
              <div className="item ewaste" style={{ display: 'none' }}>
                <h3>E-Waste Scrap</h3>
                <p className="psg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
                  porro sapiente eos commodi itaque ullam iure quo tempora
                  neque?
                </p>
              </div>
              <div className="item doorto" style={{ display: 'none' }}>
                <h3>Door To Door</h3>
                <p className="psg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia, magnam ea at necessitatibus rem dolorem quis
                  corporis nihil. Inventore, nisi.
                </p>
              </div>
              <div className="item reportto" style={{ display: 'none' }}>
                <h3>Report To Customers</h3>
                <p className="psg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  consequatur earum expedita quod quis itaque!
                </p>
              </div>
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
            <a onClick={() => handleClickNavigation('/dustman/contact-us')}>
              <button className="contact-btn">
                Contact Us <img src={contactArrow} alt="" />
              </button>
            </a>
          </p>
        </div>
      </div>
      {/* {
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
      } */}
    </>
  );
}

export default LandingPage;
