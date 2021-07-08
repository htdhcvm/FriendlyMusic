import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ActionUi from '../features/ui/action';
import * as ActionUser from '../features/user/action';
import * as ActionVacancy from '../features/vacancy/action';
import * as ActionResumes from '../features/resumes/action';
import * as ActionGroup from '../features/group/action';

const actions = {
    ...ActionUser,
    ...ActionUi,
    ...ActionVacancy,
    ...ActionResumes,
    ...ActionGroup,
};

export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};
