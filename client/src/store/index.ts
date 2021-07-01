import { createStore, applyMiddleware, Store, AnyAction } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducer';

const reduxState = localStorage.getItem('reduxState');

const persistState =
    reduxState !== null
        ? JSON.parse(localStorage.getItem('reduxState') || '{}')
        : {};

export const store = createStore(
    rootReducer,
    persistState as {},
    composeWithDevTools(applyMiddleware(thunk))
) as Store<any, AnyAction>;
