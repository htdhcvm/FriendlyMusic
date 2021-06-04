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
import Vacancies from './vacanciesFactory';
import User_Resume from './user_ResumeFactory';
import Resumes from './resumesFactory';

const factories = {
    user: Factory.extend(User),
    refreshSessions: Factory.extend(RefreshSessions),
    courses: Factory.extend(Courses),
    university: Factory.extend(University),
    placeWorks: Factory.extend(PlaceWorks),
    groups: Factory.extend(Groups),
    socials: Factory.extend(Socials),
    group_vacancies: Factory.extend(Group_vacancies),
    dataScopes: Factory.extend(DataScopes),
    vacancies: Factory.extend(Vacancies),
    user_Resume: Factory.extend(User_Resume),
    resumes: Factory.extend(Resumes),
};

export default factories;
