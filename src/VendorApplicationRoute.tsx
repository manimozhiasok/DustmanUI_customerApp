import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Loader } from './components';
import useVendorInfo from './hooks/useVendorInfo';
import { getVendorId } from './Utils';

enum AUTH_STATE {
  NOT_LOGGED_ID,
  CHECKING,
  SIGNED_IN
}

const VendorApplicationRoute = () => {
  const [authState, setAuthState] = useState(AUTH_STATE.CHECKING);
  const { updateVendorInfo } = useVendorInfo();

  const fetchData = async () => {
    const vendorId = await getVendorId();
    if (vendorId !== null) {
      updateVendorInfo(vendorId);
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
    <Navigate to="/dustman/vendor-home" />
  ) : (
    <Navigate to="/dustman/vendor-login/vendor-page-login" />
  );
};
export default VendorApplicationRoute;
