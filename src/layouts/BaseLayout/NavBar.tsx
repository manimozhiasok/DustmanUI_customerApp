import { useContext } from 'react';
import { useTheme, Theme, makeStyles } from '@material-ui/core';
import { LoginDrawerContext } from '../../contexts/LoginDrawerContext';
import { Pathname, useNavigate } from 'react-router';
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
    document.getElementById('login-list').classList.remove('show');
    navigateTo('/dustman/login', { replace: true });
  };

  function showLoginOptions() {
    document.getElementById('login-list').classList.toggle('show');
  }

  const handleClickNavItem = (url: Pathname) => {
    navigateTo(url);
  };

  return (
    <>
      {/* <div className="backfill"></div> */}
      <nav className="navbar">
        <div>
          <img className="logo" src={Logo} alt="logo" />{' '}
        </div>
        <div className="navigation-bar">
          <ul className="nav-list" id="navi-list">
            <li className="list-item">
              <a
                className="current-page"
                onClick={() => handleClickNavItem('/dustman/home')}
              >
                Home
              </a>
            </li>
            <li className="list-item">
              <a onClick={() => handleClickNavItem('/dustman/about-us')}>
                About Us
              </a>
            </li>
            <li className="list-item">
              <a onClick={() => handleClickNavItem('/dustman/services')}>
                Services
              </a>
            </li>
            <li className="list-item">
              <a onClick={() => handleClickNavItem('/dustman/gallery')}>
                Gallery
              </a>
            </li>
            <li className="list-item">
              <a onClick={() => handleClickNavItem('/dustman/contact-us')}>
                Contact Us
              </a>
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
