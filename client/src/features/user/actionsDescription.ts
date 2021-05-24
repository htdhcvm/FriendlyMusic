export enum UserActionTypes {
    REGISTRATION = 'USER/REGISTRATION',
}

interface RegistrationActions {
    type: UserActionTypes.REGISTRATION;
    payload: {};
}

export type UserAction = RegistrationActions;
