import React, { useState, useEffect, useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
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

const ApplicationRoute = ({ ...rest }: { exact: boolean; path: string }) => {
  const [authState, setAuthState] = useState(AUTH_STATE.CHECKING);
  const { updateUserInfo } = useContext(UserInfoContext);

  const fetchData = async () => {
    const isAuthenticated = getToken();
    const userId = await getUserId();
    if (isAuthenticated !== null && userId !== null) {
      const response: any = await API_SERVICES.userService.getById(userId);
      if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
        updateUserInfo((prevState) => {
          return { ...prevState, ...response?.data?.user };
        });
        setAuthState(AUTH_STATE.SIGNED_IN);
      } else {
        setAuthState(AUTH_STATE.NOT_LOGGED_ID);
      }
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

  return (
    <Routes>
      <Route
        {...rest}
        element={
          authState === AUTH_STATE.SIGNED_IN ? (
            <Navigate to="/homepage/custome-info" />
          ) : (
            <Navigate to="/landing-page" />
          )
        }
      />
    </Routes>
  );
};
export default ApplicationRoute;
