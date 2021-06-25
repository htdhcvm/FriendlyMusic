import { UserAction, UserActionTypes } from './actionsDescription';

type UserStatus = 'visitor' | 'user' | 'group';

interface IState {
    status: UserStatus;
    access_token: string;
    isAuth: boolean;
    login: string;
    errors: {
        [key: string]: boolean;
    };
}

const initialState: IState = {
    status: 'visitor',
    access_token: '',
    isAuth: false,
    login: '',
    errors: {
        internalServerError: false,
        unauthorizedError: false,
    },
};

export default function userReducer(
    state: IState = initialState,
    action: UserAction
) {
    switch (action.type) {
        case UserActionTypes.REGISTRATION:
            return {
                ...state,
                access_token: action.payload.access_token,
                login: action.payload.loginAuth,
                status: 'user',
                isAuth: true,
            };

        case UserActionTypes.SIGNINMUSICIAN:
            return {
                ...state,
                access_token: action.payload.access_token,
                login: action.payload.loginAuth,
                status: 'user',
                isAuth: true,
            };
        case UserActionTypes.SIGNINGROUP:
            return {
                ...state,
                access_token: action.payload.access_token,
                login: action.payload.loginAuth,
                status: 'group',
                isAuth: true,
            };
        case UserActionTypes.INTERNALSERVERERROR:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    internalServerError: true,
                },
            };
        case UserActionTypes.SIGNINERRORUNAUTHORIZATED:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    unauthorizedError: true,
                },
            };
        case UserActionTypes.TODEFAULTERRORS:
            return {
                ...state,
                errors: {
                    internalServerError: false,
                    unauthorizedError: false,
                },
            };
        case UserActionTypes.LOGOUT:
            return {
                ...state,
                status: 'visitor',
                access_token: '',
                isAuth: false,
            };
        default:
            return { ...state };
    }
}
