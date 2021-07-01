import Category from '../types/CategoryMusicians';
import VacancyOnCategory from '../types/VacancyOnCategory';
import Social from './Social';

type Vacancy = {
    title: string;
    groupData: Group;
    socialLinks: Array<Social>;
    responsibility?: string;
    description: string;
    requirement: Array<string>;
    priceStart: number;
    experience: string;
    quality?: Array<string>;
    priceEnd: number;
    skills?: Array<string>;
    offer?: Array<string>;
    typeVacancyMusic: VacancyOnCategory;
    profession: Category;
    image: string;
    date: string;
    willPlus: Array<string>;
};

type Group = {
    name: string;
    idGroup: string;
    address?: string;
    avatar: string;
    latlon: Array<number>;
};

export default Vacancy;
