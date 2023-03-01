import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import A from './useCallback/A';
// import A from './useMemo/A';
// import Demo from './useRef/Demo'
// import A from './Stoptimer/A'
// import A from './Titlechange/A'
// import A from  './CustomHook/A'
// import A from './useFormInp/A'
// import C from './useFormInp/C'

import Count from './Task/Count';
import State from './Task/State'
import Currency from './Task/Currency'
import Additem from './Task/Additem'
import Crud from './Task/Details'
import Calculate from './Task/Calculate';
import App from './Task/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <center>
    <Count/>
    <hr></hr>
    <Currency/>
    <hr></hr>
    <State/>
    <hr></hr>
    <Additem/>
    <hr></hr>
    <Crud/>
    <hr></hr>
    <Calculate/>
      <hr></hr>
      <App/>
   </center>
  </React.StrictMode>
);

reportWebVitals();
