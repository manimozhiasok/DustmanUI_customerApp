import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';
import BaseLayout from 'src/layouts/BaseLayout';
import ApplicationRoute from './ApplicationRoute';
import LandingPage from './content/LandingPage';
import HomePage from './content/HomePage';
import HomePageLayout from './layouts/HomePageLayout';

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <ApplicationRoute exact path="/" />
      },
      {
        path: 'landing-page',
        element: <LandingPage />
      }
    ]
  },
  {
    path: 'homepage',
    element: <HomePageLayout />,
    children: [
      {
        path: 'customer-info',
        element: <HomePage />
      },    
    ]
  }
];

export default routes;
