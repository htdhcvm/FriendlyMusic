import { combineReducers } from 'redux';

import userReducer from '../features/user/userSlice';
import vacancyReducer from '../features/vacancy/vacancySlice';
import uiReducer from '../features/ui/uiSlice';
import resumesSlice from '../features/resumes/resumesSlice';

export const rootReducer = combineReducers({
    ui: uiReducer,
    user: userReducer,
    vacancy: vacancyReducer,
    resumes: resumesSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
