import VacancyOnCategory from './VacancyOnCategory';

type Vacancy = {
    fromOffer: string;
    title: string;
    groupData: Group;
    socialLinks: Array<SocialLink>;
    responsibility?: string;
    description: string;
    requirement: Array<string>;
    priceStart: number;
    experience: string;
    quality?: Array<string>;
    priceEnd: number;
    skills?: Array<string>;
    offer?: Array<string>;
    profession: string;
    professionType: string;
    typeVacancyMusic: VacancyOnCategory;
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
type SocialLink = {
    name: string;
    link: string;
    image: string;
};

export default Vacancy;
