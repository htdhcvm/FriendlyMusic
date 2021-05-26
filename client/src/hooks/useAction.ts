import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ActionUser from '../features/user/action';
import * as ActionUi from '../features/ui/action';

const actions = { ...ActionUser, ...ActionUi };

export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};
