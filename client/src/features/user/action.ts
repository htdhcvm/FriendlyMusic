import { Dispatch } from 'redux';
import { UserAction, UserActionTypes } from './actionsDescription';

import { Visitor, User } from '../../axios/axios-configuration';

import DTOSignin from '../../DTO/visitor/Signin';
import DTORegistration from '../../DTO/visitor/Registration';
import DTOSuccessAuth from '../../DTO/visitor/SuccessAuth';

export const registration = ({
    login,
    fio,
    password,
    retPassword,
}: DTORegistration) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            const response = await Visitor.get(
                `/auth/registration/musician/${login}/${fio}/${password}/${retPassword}`
            );

            const { access_token, loginAuth }: DTOSuccessAuth = response.data;

            return dispatch({
                type: UserActionTypes.REGISTRATION,
                payload: {
                    access_token,
                    loginAuth,
                },
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const signInMusician = ({ login, password }: DTOSignin) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            const response = await Visitor.get(
                `/auth/authorization/musician/${login}/${password}`
            );

            const { access_token, loginAuth }: DTOSuccessAuth = response.data;

            dispatch({
                type: UserActionTypes.SIGNINMUSICIAN,
                payload: {
                    access_token,
                    loginAuth,
                },
            });
        } catch (error) {
            const statusCodeHttp = error.response.status;

            if (statusCodeHttp === 401)
                return dispatch({
                    type: UserActionTypes.SIGNINERRORUNAUTHORIZATED,
                });

            return dispatch({
                type: UserActionTypes.INTERNALSERVERERROR,
            });
        }
    };
};

export const signInGroup = ({ login, password }: DTOSignin) => {
    return async (dispatch: Dispatch<UserAction>) => {
        const response = await Visitor.get(
            `/auth/authorization/group/${login}/${password}`
        );

        const { access_token, loginAuth }: DTOSuccessAuth = response.data;

        dispatch({
            type: UserActionTypes.SIGNINGROUP,
            payload: {
                access_token,
                loginAuth,
            },
        });
    };
};

export const errorToDefault = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        dispatch({
            type: UserActionTypes.TODEFAULTERRORS,
        });
    };
};

export const logout = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        const response = await User.get('/logout');

        if (response.status === 200)
            dispatch({
                type: UserActionTypes.LOGOUT,
            });
    };
};

export const getCurrentUser = (idUser: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        const response = await User.get(`/getCurrentUser/${idUser}`);

        const user = response.data;
        console.log(user);
    };
};

export const getUserOnId = (idUser: string) => {
    return async (dispatch: Dispatch<UserAction>) => {};
};
export const clearUserData = () => {
    return async (dispatch: Dispatch<UserAction>) => {};
};
