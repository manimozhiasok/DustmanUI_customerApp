import { Suspense, lazy } from 'react';
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
      }
    ]
  }
];

export default routes;
