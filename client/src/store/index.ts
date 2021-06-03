import { createStore, applyMiddleware, Store, AnyAction } from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './reducer';

const persistedReducer = persistReducer(
    {
        key: 'root',
        storage,
    },
    rootReducer
);

export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
) as Store<any, AnyAction>;

export const persistor = persistStore(store);
