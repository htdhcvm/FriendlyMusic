import DTOSuccessAuth from '../../DTO/visitor/SuccessAuth';
import User from '../../types/User';
export enum UserActionTypes {
    REGISTRATION = 'USER/REGISTRATION',
    SIGNINMUSICIAN = 'USER/SIGNINMUSICIAN',
    SIGNINGROUP = 'USER/SIGNINGROUP',
    SIGNINERRORUNAUTHORIZATED = 'USER/SIGNINERRORUNAUTHORIZATED',
    INTERNALSERVERERROR = 'USER/INTERNALSERVERERROR',
    TODEFAULTERRORS = 'USER/TODEFAULTERRORS',
    LOGOUT = 'USER/LOGOUT',
    CLEARCURRENTUSERDATA = 'USER/CLEARCURRENTUSERDATA',
    CURRENTUSER = 'USER/CURRENTUSER',
}

interface Actions {
    type: string;
    payload?: string | DTOSuccessAuth | User<string>;
}

interface RegistrationActions extends Actions {
    type: UserActionTypes.REGISTRATION;
    payload: DTOSuccessAuth;
}

interface SignInMusicianAction extends Actions {
    type: UserActionTypes.SIGNINMUSICIAN;
    payload: DTOSuccessAuth;
}

interface SignInGroupAction extends Actions {
    type: UserActionTypes.SIGNINGROUP;
    payload: DTOSuccessAuth;
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

interface ClearUserData {
    type: UserActionTypes.CLEARCURRENTUSERDATA;
}

interface GetCurrentUser extends Actions {
    type: UserActionTypes.CURRENTUSER;
    payload: User<string>;
}

export type UserAction =
    | RegistrationActions
    | SignInMusicianAction
    | SignInGroupAction
    | SignInErrorUnauthorizated
    | InnternalServerError
    | ToDefaultErrors
    | ClearUserData
    | GetCurrentUser
    | Logout;
