import Fork from './Fork';
import Social from './Social';
import Qualification from './Qualification';

export interface User<T> {
    login: string;
    fio: string;
    dateBirthday?: string;
    gander?: string;
    telephone?: string;
    address?: string;
    email?: string;
    site?: string;
    profession?: {
        type: string;
        description: string;
    };
    musicInstrument?: string;
    experience?: string;
    aboutYourSelf?: string;
    avatar?: string;
    language?: string[];
    socialList?: Social[];
    skills?: string[];
    quality?: string[];
    prevWorksList?: Work<T>[];
    institutionList?: Institution<T>[];
    coursesList?: Course<T>[];
    listVideos?: string[];
    photos?: string[];
}

export interface Work<T> {
    name: string;
    position: string;
    link?: string;
    periodWork: Fork<T>;
}
interface Institution<T> {
    name: string;
    timeEducation: Fork<T>;
    nameFaculty: string;
    qualification: Qualification;
}
interface Course<T> {
    name: string;
    timeEducation: Fork<T>;
    nameSchool: string;
}

export default User;
