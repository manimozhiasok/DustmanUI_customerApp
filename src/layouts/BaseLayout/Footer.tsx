import { ClassNames } from '@emotion/react';
import { useTheme, Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { logo1, mail, ph, f1, f2, f3 } from 'src/Assets';
const useStyles = makeStyles((theme: Theme) => ({
  footerContainer: {
    height: 100,
    background: theme.Colors.primary,
    color: theme.Colors.white
  }
}));

const Footer = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <footer>
      <div className="f1">
        <img src={logo1} alt="" />
        <p>
          E-Waste Management across the India. Its time to fight against
          electronics waste in our country.
        </p>
        <div className="symbols">
          <a href="https://www.facebook.com/">
            <img className="sym" src={f1} alt="" />
          </a>
          <a href="https://www.instagram.com/accounts/login/">
            <img className="sysm" src={f2} alt="" />
          </a>
          <a href="https://www.linkedin.com/">
            <img className="sym" src={f3} alt="" />
          </a>
        </div>
      </div>

      <div className="f2">
        <h5>Working Hours</h5>
        <p>
          We work 7 days a week, every day excluding major holidays. Contact us
          for enquiries, with our Hotline and Contact form.
        </p>
        <div className="f2-time">
          <p>Monday - Saturday</p>
          <p>10:00 - 18:30</p>

          <p>Sunday & Holidays</p>
          <p>10:00 - 13:00</p>
        </div>
      </div>

      <div className="f3">
        <h5>Work Enquiries</h5>
        <p>
          Interested in working with us?
          <br />
          hello@dustman.io
        </p>
      </div>

      <div className="f4">
        <h5>Stay in touch</h5>
        <div className="contact">
          <a href="mailto: info@dustman.io">
            <img src={mail} alt="" />
          </a>
          <p>info@dustman.io</p>
          <a href="callto: +918939877444">
            <img src={ph} alt="" />
          </a>
          <p>+91 89398 77444</p>
        </div>
      </div>

      <div className="copyright">
        <p>Privacy & Cookie Policy | Terms of Service</p>
        <p>Copyright © 2022, Designed & Developed by Unitive Technologies</p>
      </div>
    </footer>
  );
};

export default Footer;
