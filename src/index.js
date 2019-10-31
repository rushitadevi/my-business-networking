import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import * as serviceWorker from './serviceWorker';
import MainPage from './components/MainPage';
import { Provider } from "react-redux";
import configureStore from "./store";

const newstore = configureStore()

ReactDOM.render(<Provider store={newstore}><MainPage /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
