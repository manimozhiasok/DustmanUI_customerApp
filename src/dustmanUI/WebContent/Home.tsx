import React from 'react';
import {
  aboutPh,
  app3,
  bankSupport,
  btn2,
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  contactArrow,
  DropDown,
  factoryImg,
  google3,
  home1,
  home2,
  home3,
  home4,
  iconbox1,
  iconbox2,
  iconbox3,
  iconbox4,
  knowMore,
  Logo,
  logo3x,
  ourRangeImg,
  staffMem,
  stock,
  stock1,
  tnpcbImg,
  vehicleType
} from 'src/Assets';
import './website.css';
function Home() {
  return (
    <>
      <div className="backfill"></div>
      <nav className="navbar">
        <div>
          <img className="logo" src={logo3x} alt="logo" />
        </div>
        <div className="navigation-bar">
          <ul className="nav-list" id="navi-list">
            <li className="list-item">
              <a className="current-page" href="index.html">
                Home
              </a>
            </li>
            <li className="list-item">
              <a href="about.html">About Us</a>
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
            <button className="login-btn" id="login-btn">
              Log in <img src={DropDown} />
            </button>
            <div className="login-list" id="login-list">
              <a href="http://localhost:3000/homepage/customer-info">
                Customer
              </a>
              <a href="http://localhost:3000/homepage/vendor-info">Vendor</a>
            </div>
          </div>
        </div>
      </nav>
      <header>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>

        <button className="nav-toggle" aria-label="toggle navigation">
          <span className="hamburger"></span>
        </button>

        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href="index.html">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="about.html">
                About Us
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="other.html">
                Services
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="gallery.html">
                Gallery
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="contact.html">
                Contact Us
              </a>
            </li>

            <li className="login-item">
              <button className="login-btn" id="login-btn-resp">
                Log in <img src={DropDown} />
              </button>
              <div className="login-list" id="login-list-resp">
                <a
                  className="login-first"
                  href="http://localhost:3000/homepage/customer-info"
                >
                  Customer
                </a>
                <a href="http://localhost:3000/homepage/vendor-info">Vendor</a>
              </div>
            </li>
          </ul>
        </nav>
      </header>

      <section>
        <div className="landing1">
          <div className="home-first">
            <p className="home-subtitle">solution for the every solution</p>
            <h1 className="home-title">
              Dustman<br></br>Waste<br></br>Management<br></br>& Recycling
            </h1>
            <p className="home-sub">
              Leader in electrical Waste Management & Recycling Solutions
            </p>
            <a href="about.html">
              <img className="knowmore-btn" src={knowMore} alt="" />
            </a>
          </div>
          <div className="home-pic">
            <img className="home-pic1" src={stock} alt="" />
            <img className="home-pic2" src={ourRangeImg} alt="" />
          </div>
        </div>
        <div className="landing2">
          <div className="round">
            <img src={tnpcbImg} alt="" />
            <p>TNPCB Approved</p>
          </div>

          <div className="round">
            <img src={staffMem} alt="" />
            <p>50+ Staff Members</p>
          </div>

          <div className="round">
            <img src={bankSupport} alt="" />
            <p>Bank Support</p>
          </div>

          <div className="round">
            <img src={vehicleType} alt="" />
            <p>All Vehicle Types</p>
          </div>
        </div>

        <div className="landing3">
          <p className="home-subtitle1">Are YOU thinking</p>
          <p className="home-title1">Why Dustman</p>
          <div className="home-why">
            <div>
              <img src={factoryImg} alt="" />
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

        <div className="landing5">
          <div className="client-title">
            <p>OUR CLIENTS</p>
            <h3>
              Clients we<br></br>work for.
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

        <div className="landing6">
          <img className="home-ph-image" src={aboutPh} alt="" />
          <div className="ph-text">
            <h5>Mobile apps</h5>
            <h1>
              Book your<br></br>pickup from<br></br>our App
            </h1>
            <p>
              Dedicated mobile app for Customers and Vendors. Download the app
              for exclusive deals and ease of booking.
            </p>
            <div className="play-btn">
              {/* <!-- <img src="images/111.png" alt=""> --> */}
              <img className="play-btn-img" src={google3} alt="" />
              <img className="play-btn-img" src={app3} alt="" />
            </div>
          </div>
        </div>

        <div className="landing7">
          <p className="pre-head">Contacts</p>
          <p className="head">Questions?</p>
          <p className="get-in">Get in touch.</p>
          <a href="contact.html">
            <button className="contact-btn">
              Contact Us <img src={contactArrow} alt="" />
            </button>
          </a>
        </div>
      </section>
    </>
  );
}
export default Home;
