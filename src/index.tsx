import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from 'src/App';
import { SidebarProvider } from 'src/contexts/SidebarContext';
import * as serviceWorker from 'src/serviceWorker';
import { UserInfoProvider } from './contexts/UserContext';
import './Translations';
import { LoginDrawerProvider } from 'src/contexts/LoginDrawerContext';

ReactDOM.render(
  <HelmetProvider>
    <SidebarProvider>
      <LoginDrawerProvider>
      <UserInfoProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserInfoProvider>
      </LoginDrawerProvider>
    </SidebarProvider>
  </HelmetProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
