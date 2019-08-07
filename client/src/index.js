import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App';
import "bootstrap/dist/css/bootstrap.min.css";
import './bight-styles.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// <div>Icons made by <a href="https://www.flaticon.com/authors/roundicons-freebies" title="Roundicons Freebies">Roundicons Freebies</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
