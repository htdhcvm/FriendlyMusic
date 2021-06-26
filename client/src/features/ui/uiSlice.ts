import { Reducer } from 'redux';

import { UiActionTypes, UiAction } from './uiDescription';

interface InitStateUi {
    toggle: boolean;
}

const initialState: InitStateUi = {
    toggle: false,
};

const uiReducer: Reducer<InitStateUi, UiAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case UiActionTypes.OPENMENU:
            return {
                ...state,
                toggle: action.payload,
            };
        case UiActionTypes.CLOSEMENU:
            return {
                ...state,
                toggle: action.payload,
            };
        default:
            return { ...state };
    }
};
export default uiReducer;
