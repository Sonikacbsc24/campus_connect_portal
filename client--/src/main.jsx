import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthModule from './AuthModule';

const rootEl = document.getElementById('auth-root');

if (rootEl) {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <AuthModule initialMode="login" />
    </React.StrictMode>
  );
}