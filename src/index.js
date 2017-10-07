import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import getResults from './helpers/getResults'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
