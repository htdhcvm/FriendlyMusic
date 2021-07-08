import { Reducer } from 'redux';
import { UserAction, UserActionTypes } from './actionsDescription';
import UserStatus from '../../types/UserStatus';
import User from '../../types/User';

interface IState {
    status: UserStatus;
    access_token: string;
    isAuth: boolean;
    login: string;
    errors: {
        [key: string]: boolean;
    };
    currentUser: User<string>;
}

const initialState: IState = {
    status: 'visitor',
    isAuth: false,
    access_token: '',
    login: '',
    errors: {
        internalServerError: false,
        unauthorizedError: false,
    },
    currentUser: {
        login: '',
        fio: '',
        dateBirthday: '',
        gander: '',
        telephone: '',
        address: '',
        email: '',
        site: '',
        profession: { type: '', description: '' },
        musicInstrument: '',
        experience: '',
        aboutYourSelf: '',
        avatar: '',
        language: [],
        skills: [],
        quality: [],
        listVideos: [],
        socialList: [],
        prevWorksList: [],
        institutionList: [],
        coursesList: [],
        photos: [],
    },
};

const userReducer: Reducer<IState, UserAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case UserActionTypes.REGISTRATION:
            return {
                ...state,
                access_token: action.payload.access_token,
                login: action.payload.loginAuth,
                isAuth: true,
                status: 'user',
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
        case UserActionTypes.CLEARCURRENTUSERDATA:
            return {
                ...state,
                currentUser: {
                    login: '',
                    fio: '',
                    dateBirthday: '',
                    gander: '',
                    telephone: '',
                    address: '',
                    email: '',
                    site: '',
                    profession: { type: '', description: '' },

                    musicInstrument: '',
                    experience: '',
                    aboutYourSelf: '',
                    avatar: '',
                    language: [],
                    skills: [],
                    quality: [],
                    listVideos: [],
                    socialList: [],
                    prevWorksList: [],
                    institutionList: [],
                    coursesList: [],
                    photos: [],
                },
            };
        case UserActionTypes.CURRENTUSER:
            return {
                ...state,
                currentUser: action.payload,
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
};

export default userReducer;
