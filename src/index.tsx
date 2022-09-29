import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from 'src/App';
import { SidebarProvider } from 'src/contexts/SidebarContext';
import * as serviceWorker from 'src/serviceWorker';
import { UserInfoProvider } from './contexts/UserContext';
import './Translations';

ReactDOM.render(
  <HelmetProvider>
    <SidebarProvider>
      <UserInfoProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserInfoProvider>
    </SidebarProvider>
  </HelmetProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
