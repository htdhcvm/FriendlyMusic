import VacancyItemList from '../../types/VacancyItemList';
import VacancyOnCategory from '../../types/VacancyOnCategory';
import Vacancy from '../../types/Vacancy';

export enum VacancyActionTypes {
    GETLISTVACANCIES = 'VACANCY/GETLISTVACANCIES',
    GETCOUNTTYPEVACANCY = 'VACANCY/GETCOUNTTYPEVACANCY',
    GETVACANCYONID = 'VACANCY/GETVACANCYONID',
    CLEARCURRENTVACANCYDATA = 'VACANCY/CLEARCURRENTVACANCYDATA',
}

interface Actions {
    type: string;
    payload?:
        | object
        | string
        | Array<VacancyItemList>
        | Array<VacancyOnCategory>
        | Vacancy;
}

interface GetListVacancies extends Actions {
    type: VacancyActionTypes.GETLISTVACANCIES;
    payload: Array<VacancyItemList>;
}

interface GetCountOnTypeVacancy extends Actions {
    type: VacancyActionTypes.GETCOUNTTYPEVACANCY;
    payload: Array<VacancyOnCategory>;
}

interface GetVacancyOnId extends Actions {
    type: VacancyActionTypes.GETVACANCYONID;
    payload: Vacancy;
}

interface ClearCurrentVacancyData extends Actions {
    type: VacancyActionTypes.CLEARCURRENTVACANCYDATA;
}

export type VacancyAction =
    | GetListVacancies
    | GetCountOnTypeVacancy
    | GetVacancyOnId
    | ClearCurrentVacancyData;
