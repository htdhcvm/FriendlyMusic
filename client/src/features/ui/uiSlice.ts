import { UiActionTypes, UiAction } from './uiDescription';

interface initStateUi {
    toggle: boolean;
}

const initialState: initStateUi = {
    toggle: false,
};

export default function uiReducer(state = initialState, action: UiAction) {
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
            return state;
    }
}
