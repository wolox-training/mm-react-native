import React from 'react';
import ReactDOM from 'react-dom';

import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';
import App from './app/components/App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
