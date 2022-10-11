import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';
import BaseLayout from 'src/layouts/BaseLayout';
import ApplicationRoute from './ApplicationRoute';
import LandingPage from './content/LandingPage';
import HomePage from './content/HomePage';
import HomePageLayout from './layouts/HomePageLayout';
import CustomerLogin from './content/Login/CustomerLogin';
import VerifyOtp from './content/Login/VerifyOtp';

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <ApplicationRoute />
      },
      {
        path: 'landing-page',
        element: <LandingPage />,
        children: [
          {
            path: 'customer-login',
            element: <CustomerLogin />
          },
          {
            path: 'verify-otp',
            element: <VerifyOtp />
          }
        ]
      }
    ]
  },
  {
    path: 'homepage',
    element: <HomePageLayout />,
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
];

export default routes;
