import { Dispatch } from 'redux';
import { VacancyActionTypes, VacancyAction } from './actionsDescription';

import { Visitor } from '../../axios/axios-configuration';

import { ListVacancy } from '../../DTO/visitor/listVacancy';

export const getListVacancies = () => {
    return async (dispatch: Dispatch<VacancyAction>) => {
        const response = await Visitor.get('/visitor/getListVacancy');

        const listVacancies = response.data;

        dispatch({
            type: VacancyActionTypes.GETLISTVACANCIES,
            payload: listVacancies,
        });
    };
};
