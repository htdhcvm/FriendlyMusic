import Qualification from './Qualification';
import Social from './Social';
import Fork from './Fork';

type Resume = {
    idUser: string;
    fio: string;
    title: string;
    dateBirthday?: string;
    gander?: string;
    telephone?: string;
    address?: string;
    email?: string;
    site?: string;
    avatar?: string;
    profession?: {
        type: string;
        description: string;
    };
    musicInstrument?: string;
    salary?: number;
    experience?: string;
    aboutYourSelf?: string;
    kindActivity?: KindActivity;

    language?: Array<string>;
    socialList?: Array<Social>;
    skills?: Array<string>;
    quality?: Array<string>;
    prevWorkList?: Array<Work>;
    institutionList?: Array<Institution>;
    coursesList?: Array<Course>;
};

type KindActivity = {
    type: string;
    description: string;
};

export type Course = {
    name: string;
    timeEducation: Period;
    nameSchool: string;
};

export type Work = {
    name: string;
    position: string;
    link: string;
    periodWork: Period;
};

export type Institution = {
    name: string;
    timeEducation: Period;
    nameFaculty: string;
    qualification: Qualification;
};

type Period = {
    start: string;
    end: string;
};

export default Resume;
