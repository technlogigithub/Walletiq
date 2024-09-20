import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import AOS from 'aos'; 
import 'aos/dist/aos.css'; // You need to import the CSS file as well 

import App from './App';
import reportWebVitals from './reportWebVitals';

AOS.init({ // Initialize AOS with default settings
  duration: 600, // You can set the default duration here
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
