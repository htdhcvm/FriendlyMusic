import { Dispatch } from 'redux';
import { VacancyActionTypes, VacancyAction } from './actionsDescription';

import { Visitor } from '../../axios/axios-configuration';

import DTOVacancyItemList from '../../DTO/visitor/ListVacancy';
import DTOListTypeVacancy from '../../DTO/visitor/ListTypeVacancy';

import { createSocials } from '../../factoryComponents/Socials/Socials';

import {
    createMusicians,
    createMusician,
} from '../../factoryComponents/Musician/Musician';

export const getListVacancies = () => {
    return async (dispatch: Dispatch<VacancyAction>) => {
        const response = await Visitor.get('/visitor/getListVacancy');

        const listVacancies: DTOVacancyItemList = response.data;

        dispatch({
            type: VacancyActionTypes.GETLISTVACANCIES,
            payload: listVacancies,
        });
    };
};

export const getCountOnTypeVacancy = () => {
    return async (dispatch: Dispatch<VacancyAction>) => {
        const response = await Visitor.get('/visitor/getCountCategory');

        const listVacanciesType: DTOListTypeVacancy = createMusicians(
            response.data
        );

        dispatch({
            type: VacancyActionTypes.GETCOUNTTYPEVACANCY,
            payload: listVacanciesType,
        });
    };
};

export const getVacancyOnId = (id: string) => {
    return async (dispatch: Dispatch<VacancyAction>) => {
        const response = await Visitor.get(`/visitor/getDataVacancy/${id}`);

        const vacancy = response.data;

        vacancy.typeVacancyMusic = createMusician({
            profession: vacancy.profession.description,
            professionType: vacancy.profession.type,
        });

        vacancy.socialLinks = createSocials(vacancy.socialLinks);

        dispatch({
            type: VacancyActionTypes.GETVACANCYONID,
            payload: vacancy,
        });
    };
};

export const clearCurrentVacancyData = () => {
    return (dispatch: Dispatch<VacancyAction>) => {
        dispatch({
            type: VacancyActionTypes.CLEARCURRENTVACANCYDATA,
        });
    };
};
