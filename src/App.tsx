import { CssBaseline } from '@material-ui/core';
import { useLocation, useNavigate, useRoutes } from 'react-router-dom';
import router from 'src/router';
import ThemeProvider from './theme/ThemeProvider';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import useUserInfo from './hooks/useUserInfo';
import { getCustomerId, getVendorId } from './Utils';
import { Loader } from './components';
import useVendorInfo from './hooks/useVendorInfo';

enum AUTH_STATE {
  NOT_LOGGED_ID,
  CHECKING,
  SIGNED_IN
}

function App() {
  const content = useRoutes(router);
  const [authState, setAuthState] = useState(AUTH_STATE.CHECKING);
  const { updateUserInfo } = useUserInfo();
  const { updateVendorInfo } = useVendorInfo();
  const navigateTo = useNavigate();
  const location = useLocation();

  console.log(location, 'location');
  const fetchData = async () => {
    const userId = await getCustomerId();
    const vendorId = await getVendorId();
    if (userId !== null) {
      updateUserInfo(userId);
      setAuthState(AUTH_STATE.SIGNED_IN);
    } else if (vendorId !== null) {
      updateVendorInfo(vendorId);
      setAuthState(AUTH_STATE.SIGNED_IN);
    } else {
      setAuthState(AUTH_STATE.NOT_LOGGED_ID);
      navigateTo('/dustman', { replace: true });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (authState === AUTH_STATE.CHECKING) {
    return <Loader />;
  }

  return (
    <ThemeProvider>
      <CssBaseline />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            padding: '10px',
            color: '#FFFF',
            fontSize: 15
          },
          success: {
            style: {
              background: 'green'
            },
            duration: 2000
          },
          error: {
            style: {
              background: 'red'
            },
            duration: 2000
          }
        }}
      />
      {content}
    </ThemeProvider>
  );
}
export default App;
