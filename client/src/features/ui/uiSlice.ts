import { UiActionTypes, UiAction } from './uiDescription';

interface InitStateUi {
    toggle: boolean;
}

const initialState: InitStateUi = {
    toggle: false,
};

export default function uiReducer(
    state: InitStateUi = initialState,
    action: UiAction
) {
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
}
