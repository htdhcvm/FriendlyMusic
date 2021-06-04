import { Factory } from 'miragejs';

import User from './userFactory';
import RefreshSessions from './refreshSessionsFactory';
import Courses from './coursesFactory';
import University from './universityFactory';
import PlaceWorks from './placeWorksFactory';
import Groups from './groupsFactory';
import Socials from './socialsFactory';
import Group_vacancies from './group_vacanciesFactory';
import DataScopes from './dataScopesFactory';
import Vacancy from './vacanciesFactory';
import User_Resume from './user_ResumeFactory';
import Resumes from './resumesFactory';

const factories = {
    user: Factory.extend(User),
    refreshSession: Factory.extend(RefreshSessions),
    course: Factory.extend(Courses),
    university: Factory.extend(University),
    placeWork: Factory.extend(PlaceWorks),
    group: Factory.extend(Groups),
    social: Factory.extend(Socials),
    group_vacancie: Factory.extend(Group_vacancies),
    dataScope: Factory.extend(DataScopes),
    vacancy: Factory.extend(Vacancy),
    user_Resume: Factory.extend(User_Resume),
    resume: Factory.extend(Resumes),
};

export default factories;
