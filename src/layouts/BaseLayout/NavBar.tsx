import { useContext } from 'react';
import { useTheme, Theme, makeStyles } from '@material-ui/core';
import { LoginDrawerContext } from '../../contexts/LoginDrawerContext';
import { useNavigate } from 'react-router';
import { Logo, DropDown } from 'src/Assets';

const useStyles = makeStyles((theme: Theme) => ({}));
function NavBar() {
  const theme = useTheme();
  const classes = useStyles();
  const navigateTo = useNavigate();
  const { toggleLoginDrawer, isLoginDrawerOpen } =
    useContext(LoginDrawerContext);

  const handleCustomerButtonClick = () => {
    toggleLoginDrawer();
    navigateTo('/dustman-home/login', { replace: true });
  };
  function showLoginOptions() {
    document.getElementById('login-list').classList.toggle('show');
  }
  return (
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

export default NavBar;
