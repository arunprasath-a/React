import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Login from "./App";



ReactDOM.render(<Login/>, document.getElementById('root'));

serviceWorker.unregister();
