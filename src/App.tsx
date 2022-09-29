import { CssBaseline } from '@material-ui/core';
import { useRoutes } from 'react-router-dom';
import router from 'src/router';
import ThemeProvider from './theme/ThemeProvider';
import { Toaster } from 'react-hot-toast';

function App() {
  const content = useRoutes(router);

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
            }
          },
          error: {
            style: {
              background: 'red'
            }
          }
        }}
      />
      {content}
    </ThemeProvider>
  );
}
export default App;
