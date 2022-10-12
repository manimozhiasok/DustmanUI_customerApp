import React, { useState, useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Loader } from './components';
import { HTTP_STATUSES } from './Config/constant';
import { UserInfoContext } from './contexts/UserContext';
import { API_SERVICES } from './Services';
import { getToken, getUserId } from './Utils';

enum AUTH_STATE {
  NOT_LOGGED_ID,
  CHECKING,
  SIGNED_IN
}

const ApplicationRoute = () => {
  const [authState, setAuthState] = useState(AUTH_STATE.CHECKING);
  const { updateUserInfo } = useContext(UserInfoContext);

  const fetchData = async () => {
    const isAuthenticated = getToken();
    const userId = await getUserId();
    //set while api integration
    let notSet = false;
    if (isAuthenticated !== null && userId !== null && notSet) {
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
    <Navigate to="/homepage/customer-info" />
  ) : (
    <Navigate to="/landing-page" />
  );
};
export default ApplicationRoute;
