import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';
import BaseLayout from 'src/dutmanui/layouts/BaseLayout';
import HomePage from './dutmanui/content/HomePage';
import CustomerLogin from './dutmanui/content/Login/CustomerLogin';
import VerifyOtp from './dutmanui/content/Login/VerifyOtp';
import CreateAccountSignUp from './dutmanui/content/Login/CreateAccountSignUp';
import ChooseUserType from './dutmanui/content/Login/ChooseUserType';
import ApplicationRoute from './ApplicationRoute';
import AboutUs from './dutmanui/WebContent/AboutUs';
import Services from './dutmanui/WebContent/Services';
import Gallery from './dutmanui/WebContent/Gallery';
import ContactUs from './dutmanui/WebContent/ContactUs';
import LandingPage from './dutmanui/WebContent/LandingPage';
import Login from './dutmanui/content/Login';
//vendor route component
import VendorLogin from './dutmanui/VendorContent/VendorLogin';
import VendorPageLogin from './dutmanui/VendorContent/VendorLogin/VendorPageLogin';
import VendorApplicationRoute from './VendorApplicationRoute';
import VendorHomePage from './dutmanui/VendorContent/VendorHomePage';
import VendorCreateAccountSignUp from './dutmanui/VendorContent/VendorLogin/VendorCreateAccountSignUp';
import VendorVerifyOtp from './dutmanui/VendorContent/VendorLogin/VendorVerifyOtp';
import ChooseVehicleType from './dutmanui/VendorContent/VendorLogin/ChooseVehicleType';
import { VendorApproval } from './dutmanui/VendorContent/VendorLogin/VendorApproval';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="dustman" replace />
      },
      {
        path: 'dustman',
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
            path: 'customer',
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
            path: 'vendor',
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
                path: 'choose-vehicle-type',
                element: <ChooseVehicleType />
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
    ]
  }
];

export default routes;
