import React from 'react';
import '../../src/newstyle.css';

function ContactUs() {
  return (
    <>
      <img className="contact-pic" src="images/contact-pic.png" alt="" />
      <section>
        <div className="contact-page1">
          <div className="side-head">
            <a href="index.html">Home</a> |{' '}
            <a className="current-view" href="#">
              Contact Us
            </a>
          </div>
          <div>
            <h1 className="contact-title">Contact us</h1>
            <p className="contact-subtitle">Let's Start a Conversation</p>
          </div>
          <div className="contact-container">
            <form action="#">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input type="text" placeholder="" />
              </div>
              <div className="input-box">
                <span className="details">Email Address</span>
                <input type="text" placeholder="" />
              </div>

              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="text" placeholder="" />
              </div>
              <div className="input-box">
                <span className="details">Company Name</span>
                <input type="text" placeholder="" />
              </div>

              <div className="input-box msg">
                <span className="details">Message</span>
                <input type="text" placeholder="" />
                <input type="text" />
              </div>

              <div className="button">
                <input type="submit" value="SEND" />
              </div>
            </form>
          </div>
        </div>
        <div className="contact-page2">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25239.239330498367!2d79.88719048059392!3d12.931045901004381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1663585002119!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <img className="contact-map" src="images/contact.png" alt="" />
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
      </section>
    </>
  );
}
export default ContactUs;
