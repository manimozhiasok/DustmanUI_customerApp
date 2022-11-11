import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from 'src/App';
import * as serviceWorker from 'src/serviceWorker';
import { UserInfoProvider } from './dustmanUI/contexts/UserContext';
import './Translations';
import { LoginDrawerProvider } from 'src/dustmanUI/contexts/LoginDrawerContext';
import { VendorInfoProvider } from './dustmanUI/contexts/VendorContext';

ReactDOM.render(
  <HelmetProvider>
    <LoginDrawerProvider>
      <UserInfoProvider>
        <VendorInfoProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </VendorInfoProvider>
      </UserInfoProvider>
    </LoginDrawerProvider>
  </HelmetProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
