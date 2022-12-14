import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '~/App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '~/redux/store';
import { ContextProvider } from './hooks/useStateContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ContextProvider>
        <GoogleOAuthProvider clientId="377073857268-0ndokteap2mocdei7ptcc5tj122gp8c8.apps.googleusercontent.com">

          <App />

        </GoogleOAuthProvider>
      </ContextProvider>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
