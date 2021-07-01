import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ActionUi from '../features/ui/action';
import * as ActionUser from '../features/user/action';
import * as ActionVacancy from '../features/vacancy/action';
import * as ActionResumes from '../features/resumes/action';

const actions = { ...ActionUser, ...ActionUi, ...ActionVacancy, ...ActionResumes };

export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};
