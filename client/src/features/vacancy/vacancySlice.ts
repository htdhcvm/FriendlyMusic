import { ListVacancy } from '../../DTO/visitor/listVacancy';
import { ListTypeVacancy } from '../../DTO/visitor/listTypeVacancy';
import { VacancyAction, VacancyActionTypes } from './actionsDescription';

interface IState {
    listVacancies: ListVacancy;
    listVacanciesOnType: ListTypeVacancy;
}

const initialState: IState = {
    listVacancies: [],
    listVacanciesOnType: [],
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
        default:
            return { ...state };
    }
}
