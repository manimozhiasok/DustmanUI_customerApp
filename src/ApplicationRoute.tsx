import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Loader } from './components';
import useUserInfo from './hooks/useUserInfo';
import { getCustomerId } from './Utils';

enum AUTH_STATE {
  NOT_LOGGED_ID,
  CHECKING,
  SIGNED_IN
}

const ApplicationRoute = () => {
  const [authState, setAuthState] = useState(AUTH_STATE.CHECKING);
  const { updateUserInfo } = useUserInfo();

  const fetchData = async () => {
    const userId = await getCustomerId();
    if (userId !== null) {
      updateUserInfo(userId);
      setAuthState(AUTH_STATE.SIGNED_IN);
    } else {
      setAuthState(AUTH_STATE.NOT_LOGGED_ID);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (authState === AUTH_STATE.CHECKING) {
    return <Loader />;
  }

  return authState === AUTH_STATE.SIGNED_IN ? (
    <Navigate to="/dustman/customer-home" replace />
  ) : (
    <Navigate to="/dustman/customer/customer-login" replace />
  );
};
export default ApplicationRoute;
