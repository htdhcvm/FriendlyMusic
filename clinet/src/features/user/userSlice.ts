import { UserAction, UserActionTypes } from './actionsDescription';

const initialState = {};

export default function userReducer(state = initialState, action: UserAction) {
    switch (action.type) {
        case UserActionTypes.REGISTRATION:
            return state;
        default:
            return state;
    }
}
