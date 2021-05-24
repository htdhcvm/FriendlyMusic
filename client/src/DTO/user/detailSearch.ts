import { Fork } from './fork';

export interface DetailSearch<T> {
    keyWord: Array<String>;
    city?: String;
    positionGroup?: String;
    experience?: String;
    countVacancyOnPage?: Number;
    salary?: Fork<T>;
    existBase?: Boolean;
    existMaterial?: Boolean;
    existNumberPhone?: Boolean;
    existLinkSocial?: Boolean;
}
