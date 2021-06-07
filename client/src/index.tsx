import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { createMockServer } from './mirage';

if (process.env.NODE_ENV === 'development') {
    createMockServer();
}

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
