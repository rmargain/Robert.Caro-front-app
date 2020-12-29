import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import "uikit/dist/css/uikit.min.css";
import { BrowserRouter } from "react-router-dom";


UIkit.use(Icons)
//Declaración de WithRouter para rutas
const WithRouter = ()=>(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
ReactDOM.render(
    <WithRouter/>,
  document.getElementById ('root')
);

reportWebVitals();