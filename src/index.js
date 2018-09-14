import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import appStore from './store/appStore';

ReactDOM.render(
    <Provider store={appStore}>
        <App/>
    </Provider>,
    document.getElementById('app')
);