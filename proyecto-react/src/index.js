import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBoozB-RikQvM2R_fLqhGXjThWh64OGhL0",
  authDomain: "proyecto-react-fd146.firebaseapp.com",
  projectId: "proyecto-react-fd146",
  storageBucket: "proyecto-react-fd146.appspot.com",
  messagingSenderId: "287091142546",
  appId: "1:287091142546:web:873bc179d1dc08aeb59b4b",
  measurementId: "G-3F4X4DRJMG"
};
initializeApp(firebaseConfig)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
