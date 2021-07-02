import { Reducer } from 'redux';
import ResumeItemList from '../../types/ResumeItemList';
import Resume from '../../types/Resume';

import { ResumesActions, ResumesActionTypes } from './actionDescription';

interface IState {
    listResumes: Array<ResumeItemList>;
    currentResume: Resume;
}

const initialState: IState = {
    listResumes: [],

    currentResume: {
        idUser: '',
        fio: '',
        title: '',
        dateBirthday: '',
        gander: '',
        telephone: '',
        address: '',
        email: '',
        site: '',
        profession: {
            type: '',
            description: '',
        },
        musicInstrument: '',
        experience: '',
        aboutYourSelf: '',
        avatar: '',
        salary: 0,
        kindActivity: {
            type: '',
            description: '',
        },
        language: [],
        socialList: [],
        skills: [],
        quality: [],
        prevWorkList: [],
        institutionList: [],
        coursesList: [],
    },
};

const resumesSlice: Reducer<IState, ResumesActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ResumesActionTypes.GetListResumes:
            return {
                ...state,
                listResumes: action.payload,
            };
        case ResumesActionTypes.GetResumeOnId:
            return {
                ...state,
                currentResume: action.payload,
            };
        case ResumesActionTypes.ClearResumeDate:
            return {
                ...state,
                currentResume: {
                    idUser: '',
                    fio: '',
                    title: '',
                    dateBirthday: '',
                    gander: '',
                    telephone: '',
                    address: '',
                    email: '',
                    site: '',
                    profession: {
                        type: '',
                        description: '',
                    },
                    musicInstrument: '',
                    experience: '',
                    aboutYourSelf: '',
                    avatar: '',
                    salary: 0,
                    kindActivity: {
                        type: '',
                        description: '',
                    },
                    language: [],
                    socialList: [],
                    skills: [],
                    quality: [],
                    prevWorkList: [],
                    institutionList: [],
                    coursesList: [],
                },
            };
        default:
            return { ...state };
    }
};

export default resumesSlice;
