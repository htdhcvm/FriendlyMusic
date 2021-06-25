import { TypeVacancy } from './listTypeVacancy';

export interface DataVacancy {
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
    typeVacancyMusic: TypeVacancy;
    image: string;
    date: string;
    willPlus: Array<string>;
}

interface Group {
    name: string;
    idGroup: string;
    address?: string;
    avatar: string;
    latlon: Array<number>;
}
interface SocialLink {
    name: string;
    link: string;
    image: string;
}
