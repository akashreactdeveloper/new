import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"; // Import Provider for Redux
import store from "./redux/store"
import { GoogleOAuthProvider } from "@react-oauth/google";
import checkUserSession from './Utils/checkUserSession';

const CLIENT_ID =
  "1084507560935-qub6bofu729g00i126q1vfucnk6pe567.apps.googleusercontent.com";

const root = ReactDOM.createRoot(document.getElementById('root'));
checkUserSession();
root.render(


  <GoogleOAuthProvider clientId={CLIENT_ID}>
    <Provider store={store}> {/* Wrap the app with Provider */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
