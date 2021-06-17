import { ListVacancy } from '../../DTO/visitor/listVacancy';
import { ListTypeVacancy } from '../../DTO/visitor/listTypeVacancy';

export enum VacancyActionTypes {
    GETLISTVACANCIES = 'VACANCY/GETLISTVACANCIES',
    GETCOUNTTYPEVACANCY = 'VACANCY/GETCOUNTTYPEVACANCY',
}

interface Actions {
    type: string;
    payload?: object | string | ListVacancy | ListTypeVacancy;
}

interface GetListVacancies extends Actions {
    type: VacancyActionTypes.GETLISTVACANCIES;
    payload: ListVacancy;
}

interface GetCountOnTypeVacancy extends Actions {
    type: VacancyActionTypes.GETCOUNTTYPEVACANCY;
    payload: ListTypeVacancy;
}

export type VacancyAction = GetListVacancies | GetCountOnTypeVacancy;
