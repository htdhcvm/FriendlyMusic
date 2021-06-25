import { ListVacancy } from '../../DTO/visitor/listVacancy';
import { ListTypeVacancy } from '../../DTO/visitor/listTypeVacancy';
import { VacancyAction, VacancyActionTypes } from './actionsDescription';
import { DataVacancy } from '../../DTO/visitor/dataVacancy';

interface IState {
    listVacancies: ListVacancy;
    listVacanciesOnType: ListTypeVacancy;
    currentVacancy: DataVacancy;
}

const initialState: IState = {
    listVacancies: [],
    listVacanciesOnType: [],
    currentVacancy: {
        fromOffer: '',
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
        profession: '',
        professionType: '',
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

export default function vacancyReducer(
    state: IState = initialState,
    action: VacancyAction
) {
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
                    fromOffer: '',
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
                    profession: '',
                    professionType: '',
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
                        avatar: '',
                        latlon: [0, 0],
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
}
