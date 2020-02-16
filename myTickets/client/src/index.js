import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
//cousel
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import "react-alice-carousel/lib/alice-carousel.css";
import "react-alice-carousel/lib/alice-carousel.css";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
