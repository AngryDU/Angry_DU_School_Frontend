import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from 'react-router-dom';
// import {Provider} from 'react-redux';
// import dotenv from 'dotenv';
// dotenv.config();
// import store from './store/index.jsx';
// import 'overlayscrollbars/css/OverlayScrollbars.min.css';
// import { OverlayScrollbars } from 'overlayscrollbars';


const root = createRoot( document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider store={store}> */}
         <App/>
      {/* </Provider> */}
    </BrowserRouter>
</React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals






//17.4. я закомментировала       {/* <Provider store={store}> */} и деактивировала один импорт // import store from './store/index.jsx';всё продолжало работать в норм.режиме

