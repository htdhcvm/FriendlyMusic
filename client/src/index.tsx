import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './store';
import { createMockServer } from './mirage/mirageServer';

if (process.env.NODE_ENV === 'development') {
    createMockServer();
}

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
