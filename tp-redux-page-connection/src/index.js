import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Auth from "./reducers/";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(
    Auth,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(
  <Provider store={store}> 
    <App />,
  </Provider>,document.getElementById("root") );
reportWebVitals();
