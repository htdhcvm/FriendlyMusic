import { ListVacancy } from '../../DTO/visitor/listVacancy';
import { ListTypeVacancy } from '../../DTO/visitor/listTypeVacancy';
import { DataVacancy } from '../../DTO/visitor/dataVacancy';

export enum VacancyActionTypes {
    GETLISTVACANCIES = 'VACANCY/GETLISTVACANCIES',
    GETCOUNTTYPEVACANCY = 'VACANCY/GETCOUNTTYPEVACANCY',
    GETVACANCYONID = 'VACANCY/GETVACANCYONID',
    CLEARCURRENTVACANCYDATA = 'VACANCY/CLEARCURRENTVACANCYDATA',
}

interface Actions {
    type: string;
    payload?: object | string | ListVacancy | ListTypeVacancy | DataVacancy;
}

interface GetListVacancies extends Actions {
    type: VacancyActionTypes.GETLISTVACANCIES;
    payload: ListVacancy;
}

interface GetCountOnTypeVacancy extends Actions {
    type: VacancyActionTypes.GETCOUNTTYPEVACANCY;
    payload: ListTypeVacancy;
}

interface GetVacancyOnId extends Actions {
    type: VacancyActionTypes.GETVACANCYONID;
    payload: DataVacancy;
}

interface ClearCurrentVacancyData extends Actions {
    type: VacancyActionTypes.CLEARCURRENTVACANCYDATA;
}

export type VacancyAction =
    | GetListVacancies
    | GetCountOnTypeVacancy
    | GetVacancyOnId
    | ClearCurrentVacancyData;
