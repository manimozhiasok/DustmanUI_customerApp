import React from 'react';
import '../../src/newstyle.css';

function Home() {
  return (
    <>
      <div className="backfill"></div>
      <nav className="navbar">
        <div>
          <img className="logo" src="images/logo_3x.png" alt="logo" />
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
              Log in <img src="images/drop-down.png" />
            </button>
            <div className="login-list" id="login-list">
              <a href="http://localhost:3000/homepage/customer-info">
                Customer
              </a>
              <a href="#">Vendor</a>
            </div>
          </div>
        </div>
      </nav>
      <header>
        <div className="logo">
          <img src="images/logo.png" alt="" />
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
                Log in <img src="images/drop-down.png" />
              </button>
              <div className="login-list" id="login-list-resp">
                <a
                  className="login-first"
                  href="http://localhost:3000/homepage/customer-info"
                >
                  Customer
                </a>
                <a href="#">Vendor</a>
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
              <img className="knowmore-btn" src="images/btn2.png" alt="" />
            </a>
          </div>
          <div className="home-pic">
            <img className="home-pic1" src="images/stock.png" alt="" />
            <img className="home-pic2" src="images/stock1.png" alt="" />
          </div>
        </div>
        <div className="landing2">
          <div className="round">
            <img src="images/iconbox1.png" alt="" />
            <p>TNPCB Approved</p>
          </div>

          <div className="round">
            <img src="images/iconbox2.png" alt="" />
            <p>50+ Staff Members</p>
          </div>

          <div className="round">
            <img src="images/iconbox3.png" alt="" />
            <p>Bank Support</p>
          </div>

          <div className="round">
            <img src="images/iconbox4.png" alt="" />
            <p>All Vehicle Types</p>
          </div>
        </div>

        <div className="landing3">
          <p className="home-subtitle1">Are YOU thinking</p>
          <p className="home-title1">Why Dustman</p>
          <div className="home-why">
            <div>
              <img src="images/home1.png" alt="" />
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
              <img src="images/home2.png" alt="" />
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
              <img src="images/home3.png" alt="" />
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

        <div className="landing4">
          <div className="home-left">
            <img src="images/home4.png" alt="" />
            <img className="cap1" src="images/home6.png" alt="" />
            <img className="cap2" src="images/home7.png" alt="" />
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

        <div className="landing5">
          <div className="client-title">
            <p>OUR CLIENTS</p>
            <h3>
              Clients we<br></br>work for.
            </h3>
          </div>

          <div className="client-list">
            <div className="client">
              <img src="images/client1.png" alt="" />
            </div>
            <div className="client">
              <img src="images/client2.png" alt="" />
            </div>
            <div className="client">
              <img src="images/client3.png" alt="" />
            </div>
            <div className="client">
              <img src="images/client4.png" alt="" />
            </div>
            <div className="client">
              <img src="images/client5.png" alt="" />
            </div>
            <div className="client">
              <img src="images/client6.png" alt="" />
            </div>
          </div>
        </div>

        <div className="landing6">
          <img className="home-ph-image" src="images/about-ph.png" alt="" />
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
              <img className="play-btn-img" src="images/google3.png" alt="" />
              <img className="play-btn-img" src="images/app3.png" alt="" />
            </div>
          </div>
        </div>

        <div className="landing7">
          <p className="pre-head">Contacts</p>
          <p className="head">Questions?</p>
          <p className="get-in">Get in touch.</p>
          <a href="contact.html">
            <button className="contact-btn">
              Contact Us <img src="images/contact-arrow.png" alt="" />
            </button>
          </a>
        </div>
      </section>
    </>
  );
}
export default Home;
