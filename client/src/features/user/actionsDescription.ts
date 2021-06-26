import { SuccessAuth } from '../../DTO/visitor/successAuth';

export enum UserActionTypes {
    REGISTRATION = 'USER/REGISTRATION',
    SIGNINMUSICIAN = 'USER/SIGNINMUSICIAN',
    SIGNINGROUP = 'USER/SIGNINGROUP',
    SIGNINERRORUNAUTHORIZATED = 'USER/SIGNINERRORUNAUTHORIZATED',
    INTERNALSERVERERROR = 'USER/INTERNALSERVERERROR',
    TODEFAULTERRORS = 'USER/TODEFAULTERRORS',
    LOGOUT = 'USER/LOGOUT',
}

interface Actions {
    type: string;
    payload?: string | SuccessAuth;
}

interface RegistrationActions extends Actions {
    type: UserActionTypes.REGISTRATION;
    payload: SuccessAuth;
}

interface SignInMusicianAction extends Actions {
    type: UserActionTypes.SIGNINMUSICIAN;
    payload: SuccessAuth;
}

interface SignInGroupAction extends Actions {
    type: UserActionTypes.SIGNINGROUP;
    payload: SuccessAuth;
}

interface SignInErrorUnauthorizated {
    type: UserActionTypes.SIGNINERRORUNAUTHORIZATED;
}

interface InnternalServerError {
    type: UserActionTypes.INTERNALSERVERERROR;
}

interface ToDefaultErrors {
    type: UserActionTypes.TODEFAULTERRORS;
}

interface Logout {
    type: UserActionTypes.LOGOUT;
}

export type UserAction =
    | RegistrationActions
    | SignInMusicianAction
    | SignInGroupAction
    | SignInErrorUnauthorizated
    | InnternalServerError
    | ToDefaultErrors
    | Logout;
