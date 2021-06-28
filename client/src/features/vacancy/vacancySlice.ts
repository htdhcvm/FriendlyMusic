import { Reducer } from 'redux';

import { VacancyAction, VacancyActionTypes } from './actionsDescription';

import VacancyItemList from '../../types/VacancyItemList';
import VacancyOnCategory from '../../types/VacancyOnCategory';
import Vacancy from '../../types/Vacancy';

interface IState {
    listVacancies: Array<VacancyItemList>;
    listVacanciesOnType: Array<VacancyOnCategory>;
    currentVacancy: Vacancy;
}

const initialState: IState = {
    listVacancies: [],
    listVacanciesOnType: [],
    currentVacancy: {
        title: '',
        experience: '',
        description: '',
        requirement: [],
        offer: [],
        quality: [],
        skills: [],
        willPlus: [],
        responsibility: '',
        image: '',
        profession: {
            type: '',
            description: '',
        },
        priceStart: 0,
        priceEnd: 0,
        date: '',
        typeVacancyMusic: {
            image: '',
            profession: '',
            type: '',
        },
        groupData: {
            idGroup: '',
            name: '',
            address: '',
            latlon: [0, 0],
            avatar: '',
        },
        socialLinks: [],
    },
};

const vacancyReducer: Reducer<IState, VacancyAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case VacancyActionTypes.GETLISTVACANCIES:
            return {
                ...state,
                listVacancies: action.payload,
            };
        case VacancyActionTypes.GETCOUNTTYPEVACANCY:
            return {
                ...state,
                listVacanciesOnType: action.payload,
            };
        case VacancyActionTypes.CLEARCURRENTVACANCYDATA:
            return {
                ...state,
                currentVacancy: {
                    title: '',
                    experience: '',
                    description: '',
                    requirement: [],
                    offer: [],
                    quality: [],
                    skills: [],
                    willPlus: [],
                    responsibility: '',
                    image: '',
                    profession: {
                        type: '',
                        description: '',
                    },
                    priceStart: 0,
                    priceEnd: 0,
                    date: '',
                    typeVacancyMusic: {
                        image: '',
                        profession: '',
                        type: '',
                    },
                    groupData: {
                        idGroup: '',
                        name: '',
                        address: '',
                        latlon: [0, 0],
                        avatar: '',
                    },
                    socialLinks: [],
                },
            };
        case VacancyActionTypes.GETVACANCYONID:
            return {
                ...state,
                currentVacancy: action.payload,
            };
        default:
            return { ...state };
    }
};

export default vacancyReducer;
