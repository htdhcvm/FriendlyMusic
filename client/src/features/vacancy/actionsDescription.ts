import { ListVacancy } from '../../DTO/visitor/listVacancy';

export enum VacancyActionTypes {
    GETLISTVACANCIES = 'VACANCY/GETLISTVACANCIES',
}

interface Actions {
    type: string;
    payload?: object | string;
}

interface GetListVacancies extends Actions {
    type: VacancyActionTypes.GETLISTVACANCIES;
    payload: [];
}

export type VacancyAction = GetListVacancies;
