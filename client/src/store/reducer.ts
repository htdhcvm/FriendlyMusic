import { combineReducers } from 'redux';

import userReducer from '../features/user/userSlice';
import uiReducer from '../features/ui/uiSlice';

export const rootReducer = combineReducers({
    user: userReducer,
    ui: uiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
