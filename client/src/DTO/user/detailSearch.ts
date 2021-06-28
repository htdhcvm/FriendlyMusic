import Fork from '../../types/Fork';

export interface DetailSearch<T> {
    keyWord: Array<String>;
    city?: String;
    positionGroup?: String;
    experience?: String;
    countVacancyOnPage?: Number;
    salary?: Fork<T>;
    existBase?: boolean;
    existMaterial?: boolean;
    existNumberPhone?: boolean;
    existLinkSocial?: boolean;
}
