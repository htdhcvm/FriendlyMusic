import { Fork } from './fork';
import { Social } from './social';

export interface User<T> {
    fio: String;
    dateBirthday: String;
    gander: String;
    language: Array<String>;
    telephone: String;
    address: String;
    email: String;
    socialList: Array<Social>;
    site: String;
    profession: String;
    musicInstrument: String;
    experience: String;
    aboutYourSelf: String;
    skills: Array<String>;
    quality: Array<String>;
    prevWorksList: Array<Work<T>>;
    institutionList: Array<Institution<T>>;
    coursesList: Array<Course<T>>;
}

interface Work<T> {
    name: String;
    position: String;
    link?: String;
    periodWork: Fork<T>;
}
interface Institution<T> {
    name: String;
    timeEducation: Fork<T>;
    nameFaculty: String;
    qualification: Qualification;
}
interface Course<T> {
    name: String;
    timeEducation: Fork<T>;
    nameSchool: String;
}

type Qualification = 'Бакалавр';
