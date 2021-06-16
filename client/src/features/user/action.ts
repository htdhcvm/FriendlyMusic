import { Dispatch } from 'redux';
import { UserAction, UserActionTypes } from './actionsDescription';

import { Visitor, User } from '../../axios/axios-configuration';

import { Signin } from '../../DTO/visitor/signin';
import { Registration } from '../../DTO/visitor/registration';
import { SuccessAuth } from '../../DTO/visitor/successAuth';

export const registration = ({
    login,
    fio,
    password,
    retPassword,
}: Registration) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            const response = await Visitor.get(
                `/auth/registration/musician/${login}/${fio}/${password}/${retPassword}`
            );

            const { access_token, loginAuth }: SuccessAuth = response.data;

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

export const signInMusician = ({ login, password }: Signin) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            const response = await Visitor.get(
                `/auth/authorization/musician/${login}/${password}`
            );

            const { access_token, loginAuth }: SuccessAuth = response.data;

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

export const signInGroup = ({ login, password }: Signin) => {
    return async (dispatch: Dispatch<UserAction>) => {
        const response = await Visitor.get(
            `/auth/authorization/group/${login}/${password}`
        );

        const { access_token, loginAuth }: SuccessAuth = response.data;

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
