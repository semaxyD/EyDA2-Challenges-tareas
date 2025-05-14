import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App4 from './Challenge4/App4.jsx'
import App5 from './Challenge5/App5.jsx'
import App6 from './Challenge6/App6.jsx'
import App7 from './Challenge7/App7.jsx'
import App8 from './Challenge8/App8.jsx'
import App9 from './Challenge9/App9.jsx'
import App10 from './Challenge10/App10.jsx'
import App11 from './Challenge11-12-13/app/App11.jsx'
import { AuthProvider } from "./Challenge6/AuthContext";
import { Provider } from "react-redux";
import {store} from "./Challenge10/redux/store.js"
import ReactDOM from "react-dom/client";


//Challenge 9
/*createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <App9 />
  </AuthProvider>
)
*/

//Challenge 10
/*
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App10 />
  </Provider>
);
*/

//Challenge 11
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App11/>
  </React.StrictMode>
);