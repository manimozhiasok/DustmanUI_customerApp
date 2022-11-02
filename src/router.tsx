import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';
import BaseLayout from 'src/layouts/BaseLayout';
import HomePage from './content/HomePage';
import CustomerLogin from './content/Login/CustomerLogin';
import VerifyOtp from './content/Login/VerifyOtp';
import CreateAccountSignUp from './content/Login/CreateAccountSignUp';
import ChooseUserType from './content/Login/ChooseUserType';
import ApplicationRoute from './ApplicationRoute';
import AboutUs from './WebContent/AboutUs';
import Services from './WebContent/Services';
import Gallery from './WebContent/Gallery';
import ContactUs from './WebContent/ContactUs';
import LandingPage from './WebContent/LandingPage';
import Login from './content/Login';
//vendor route component
import VendorLogin from './VendorContent/VendorLogin';
import VendorPageLogin from './VendorContent/VendorLogin/VendorPageLogin';
import VendorApplicationRoute from './VendorApplicationRoute';
import VendorHomePage from './VendorContent/VendorHomePage';
import VendorCreateAccountSignUp from './VendorContent/VendorLogin/VendorCreateAccountSignUp';
import VendorVerifyOtp from './VendorContent/VendorLogin/VendorVerifyOtp';
import VendorChooseUserType from './VendorContent/VendorLogin/VendorChooseUserType';
import { VendorApproval } from './VendorContent/VendorLogin/VendorApproval';

const routes: RouteObject[] = [
  {
    path: 'dustman',
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="home" replace />
      },
      {
        path: 'home',
        element: <LandingPage />
      },
      {
        path: 'about-us',
        element: <AboutUs />
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'gallery',
        element: <Gallery />
      },
      {
        path: 'contact-us',
        element: <ContactUs />
      },
      {
        path: 'login',
        element: <Login />,
        children: [
          {
            path: '',
            element: <ApplicationRoute />
          },
          {
            path: 'customer-login',
            element: <CustomerLogin />
          },
          {
            path: 'verify-otp',
            element: <VerifyOtp />
          },
          {
            path: 'create-account',
            element: <CreateAccountSignUp />
          },
          {
            path: 'choose-user-type',
            element: <ChooseUserType />
          }
        ]
      },
      {
        path: 'vendor-login',
        element: <VendorLogin />,
        children: [
          {
            path: '',
            element: <VendorApplicationRoute />
          },
          {
            path: 'vendor-page-login',
            element: <VendorPageLogin />
          },
          {
            path: 'verify-otp',
            element: <VendorVerifyOtp />
          },
          {
            path: 'create-account',
            element: <VendorCreateAccountSignUp />
          },
          {
            path: 'choose-user-type',
            element: <VendorChooseUserType />
          },
          {
            path: 'vendor-approval',
            element: <VendorApproval />
          }
        ]
      },
      {
        path: 'customer-home',
        children: [
          {
            path: '',
            element: <Navigate to="customer-info" replace />
          },
          {
            path: 'customer-info',
            element: <HomePage />
          }
        ]
      },
      {
        path: 'vendor-home',
        children: [
          {
            path: '',
            element: <Navigate to="vendor-info" replace />
          },
          {
            path: 'vendor-info',
            element: <VendorHomePage />
          }
        ]
      }
    ]
  }
];

export default routes;
