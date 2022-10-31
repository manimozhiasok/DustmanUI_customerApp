import { CssBaseline } from '@material-ui/core';
import { useNavigate, useRoutes } from 'react-router-dom';
import router from 'src/router';
import ThemeProvider from './theme/ThemeProvider';
import { Toaster } from 'react-hot-toast';
import ApplicationRoute from './ApplicationRoute';
import { useEffect, useState } from 'react';
import useUserInfo from './hooks/useUserInfo';
import { getCustomerId } from './Utils';
import { Loader } from './components';

enum AUTH_STATE {
  NOT_LOGGED_ID,
  CHECKING,
  SIGNED_IN
}

function App() {
  const content = useRoutes(router);
  const [authState, setAuthState] = useState(AUTH_STATE.CHECKING);
  const { updateUserInfo } = useUserInfo();
  const navigateTo = useNavigate();

  const fetchData = async () => {
    const userId = await getCustomerId();
    if (userId !== null) {
      updateUserInfo(userId);
      setAuthState(AUTH_STATE.SIGNED_IN);
    } else {
      setAuthState(AUTH_STATE.NOT_LOGGED_ID);
      navigateTo('/dustman-home', { replace: true });
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
