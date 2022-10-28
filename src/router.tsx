import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';
import BaseLayout from 'src/layouts/BaseLayout';
import LandingPage from './content/LandingPage';
import HomePage from './content/HomePage';
import HomePageLayout from './layouts/HomePageLayout';
import CustomerLogin from './content/Login/CustomerLogin';
import VerifyOtp from './content/Login/VerifyOtp';
import CreateAccountSignUp from './content/Login/CreateAccountSignUp';
import ChooseUserType from './content/Login/ChooseUserType';
import ApplicationRoute from './ApplicationRoute';

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
        children: [
          {
            path: 'login',
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
