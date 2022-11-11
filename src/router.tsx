import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';
import BaseLayout from 'src/dustmanUI/layouts/BaseLayout';
import HomePage from './dustmanUI/content/HomePage';
import CustomerLogin from './dustmanUI/content/Login/CustomerLogin';
import VerifyOtp from './dustmanUI/content/Login/VerifyOtp';
import CreateAccountSignUp from './dustmanUI/content/Login/CreateAccountSignUp';
import ChooseUserType from './dustmanUI/content/Login/ChooseUserType';
import ApplicationRoute from './ApplicationRoute';
import AboutUs from './dustmanUI/WebContent/AboutUs';
import Services from './dustmanUI/WebContent/Services';
import Gallery from './dustmanUI/WebContent/Gallery';
import ContactUs from './dustmanUI/WebContent/ContactUs';
import LandingPage from './dustmanUI/WebContent/LandingPage';
import Login from './dustmanUI/content/Login';
//vendor route component
import VendorLogin from './dustmanUI/VendorContent/VendorLogin';
import VendorPageLogin from './dustmanUI/VendorContent/VendorLogin/VendorPageLogin';
import VendorApplicationRoute from './VendorApplicationRoute';
import VendorHomePage from './dustmanUI/VendorContent/VendorHomePage';
import VendorCreateAccountSignUp from './dustmanUI/VendorContent/VendorLogin/VendorCreateAccountSignUp';
import VendorVerifyOtp from './dustmanUI/VendorContent/VendorLogin/VendorVerifyOtp';
import ChooseVehicleType from './dustmanUI/VendorContent/VendorLogin/ChooseVehicleType';
import { VendorApproval } from './dustmanUI/VendorContent/VendorLogin/VendorApproval';

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
