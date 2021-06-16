import { ListVacancy } from '../../DTO/visitor/listVacancy';
import { VacancyAction, VacancyActionTypes } from './actionsDescription';

interface IState {
    list: ListVacancy;
}

const initialState: IState = {
    list: {
        listVacancy: [],
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
                list: {
                    ...state.list,
                    listVacancy: action.payload,
                },
            };
        default:
            return { ...state };
    }
}
