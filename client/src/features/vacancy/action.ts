import { Dispatch } from 'redux';
import { VacancyActionTypes, VacancyAction } from './actionsDescription';

import { Visitor } from '../../axios/axios-configuration';

import { ListVacancy } from '../../DTO/visitor/listVacancy';
import { ListTypeVacancy } from '../../DTO/visitor/listTypeVacancy';

import createMusicians from '../../factoryComponents/Musician/Musician';

export const getListVacancies = () => {
    return async (dispatch: Dispatch<VacancyAction>) => {
        const response = await Visitor.get('/visitor/getListVacancy');

        const listVacancies: ListVacancy = response.data;

        dispatch({
            type: VacancyActionTypes.GETLISTVACANCIES,
            payload: listVacancies,
        });
    };
};

export const getCountOnTypeVacancy = () => {
    return async (dispatch: Dispatch<VacancyAction>) => {
        const response = await Visitor.get('/visitor/getCountCategory');

        const listVacanciesType: ListTypeVacancy = createMusicians(
            response.data
        );

        dispatch({
            type: VacancyActionTypes.GETCOUNTTYPEVACANCY,
            payload: listVacanciesType,
        });
    };
};
