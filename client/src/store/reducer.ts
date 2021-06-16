import { combineReducers } from 'redux';

import userReducer from '../features/user/userSlice';
import uiReducer from '../features/ui/uiSlice';

export const rootReducer = combineReducers({
    ui: uiReducer,
    user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
