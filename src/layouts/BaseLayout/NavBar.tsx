import { useContext } from 'react';
import { useTheme, Theme, makeStyles } from '@material-ui/core';
import { LoginDrawerContext } from '../../contexts/LoginDrawerContext';
import { Pathname, useMatch, useNavigate } from 'react-router';
import { Logo, DropDown, UserAvatarIcon } from 'src/Assets';
import useVendorInfo from 'src/hooks/useVendorInfo';
import useUserInfo from 'src/hooks/useUserInfo';
import { ListItemCell } from 'src/components';

const useStyles = makeStyles((theme: Theme) => ({}));
function NavBar() {
  const theme = useTheme();
  const classes = useStyles();
  const navigateTo = useNavigate();
  const { toggleLoginDrawer, isLoginDrawerOpen } =
    useContext(LoginDrawerContext);
  const { vendorDetails } = useVendorInfo();
  const { userDetails } = useUserInfo();

  const handleCustomerButtonClick = () => {
    toggleLoginDrawer();
    document.getElementById('login-list').classList.remove('show');
    navigateTo('/dustman/customer', { replace: true });
  };
  const handleVendorButtonClick = () => {
    toggleLoginDrawer();
    document.getElementById('login-list').classList.remove('show');
    navigateTo('/dustman/vendor', { replace: true });
  };

  function showLoginOptions() {
    document.getElementById('login-list').classList.toggle('show');
  }

  const handleClickNavItem = (url: Pathname) => {
    navigateTo(url);
  };

  const navigationToHome = () => {
    navigateTo('/dustman', { replace: true });
  };
  const homePage = useMatch('dustman/home');
  const aboutUs = useMatch('dustman/about-us');
  const services = useMatch('dustman/services');
  const gallery = useMatch('dustman/gallery');
  const contactUs = useMatch('dustman/contact-us');
  const customerHome = useMatch('/dustman/customer-home/customer-info');
  const vendorHome = useMatch('/dustman/vendor-home/vendor-info');

  return (
    <>
      <nav className="navbar">
        <div>
          <img
            onClick={navigationToHome}
            className="logo"
            src={Logo}
            alt="logo"
          />{' '}
        </div>
        <div className="navigation-bar">
          <ul className="nav-list" id="navi-list">
            <li className="list-item">
              <a
                className={homePage && 'current-page'}
                onClick={() => handleClickNavItem('/dustman/home')}
              >
                Home
              </a>
            </li>
            <li className="list-item">
              <a
                className={aboutUs && 'current-page'}
                onClick={() => handleClickNavItem('/dustman/about-us')}
              >
                About Us
              </a>
            </li>
            <li className="list-item">
              <a
                className={services && 'current-page'}
                onClick={() => handleClickNavItem('/dustman/services')}
              >
                Services
              </a>
            </li>
            <li className="list-item">
              <a
                className={gallery && 'current-page'}
                onClick={() => handleClickNavItem('/dustman/gallery')}
              >
                Gallery
              </a>
            </li>
            <li className="list-item">
              <a
                className={contactUs && 'current-page'}
                onClick={() => handleClickNavItem('/dustman/contact-us')}
              >
                Contact Us
              </a>
            </li>
          </ul>
          <div className="empty"></div>
          {customerHome || vendorHome ? (
            <div>
              {(customerHome && (
                <ListItemCell
                  avatarImg={userDetails?.image_url || UserAvatarIcon}
                  title={userDetails?.first_name}
                  titleStyle={{ fontSize: theme.MetricsSizes.small_xxx }}
                />
              )) ||
                (vendorHome && (
                  <ListItemCell
                    avatarImg={vendorDetails?.image_url || UserAvatarIcon}
                    title={vendorDetails?.contact_name}
                    titleStyle={{ fontSize: theme.MetricsSizes.small_xxx }}
                  />
                ))}
            </div>
          ) : (
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
                <a onClick={handleVendorButtonClick}>Vendor</a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
