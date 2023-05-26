import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-phone-number-input/style.css'
import './index.css';
import {persiststor} from './store'
import { PersistGate } from 'redux-persist/integration/react';
import store from './store';

// store.subscribe = console.log(store.getstate(),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  // <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null}  persistor={persiststor}/>
      <App />
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
