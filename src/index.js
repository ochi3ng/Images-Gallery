import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import "./index.css";

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-0cs2kg1qc6oynstp.us.auth0.com"
    clientId="sVQnzvtpJjbTZoK1c0KyRgQR5a0p9GL6"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);