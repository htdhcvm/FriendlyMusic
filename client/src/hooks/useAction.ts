import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ActionUser from '../features/user/action';

export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ActionUser, dispatch);
};
