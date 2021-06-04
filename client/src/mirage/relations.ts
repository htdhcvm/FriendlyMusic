import { belongsTo, hasMany, Model } from 'miragejs';

const relations = {
    user: Model.extend({
        refreshSessions: belongsTo(),
        courses: belongsTo(),
        university: belongsTo(),
        placeWorks: belongsTo(),
        user_Resume: belongsTo(),
        groups: hasMany(),
        socials: hasMany(),
    }),
    refreshSessions: Model.extend({
        users: hasMany(),
    }),
    courses: Model.extend({
        users: hasMany(),
        dataScopes: hasMany(),
    }),
    university: Model.extend({
        users: hasMany(),
        dataScopes: hasMany(),
    }),
    placeWorks: Model.extend({
        users: hasMany(),
        dataScopes: hasMany(),
    }),
    groups: Model.extend({
        users: belongsTo(),
        socials: hasMany(),
        group_vacancies: belongsTo(),
    }),
    socials: Model.extend({
        users: belongsTo(),
        groups: belongsTo(),
    }),
    group_vacancies: Model.extend({
        groups: hasMany(),
        vacancies: hasMany(),
    }),

    dataScopes: Model.extend({
        courses: belongsTo(),
        university: belongsTo(),
        placeWorks: belongsTo(),
    }),
    vacancies: Model.extend({
        group_vacancies: belongsTo(),
    }),

    user_Resume: Model.extend({
        users: hasMany(),
        resumes: hasMany(),
    }),
    resumes: Model.extend({
        user_Resume: belongsTo(),
    }),
};

export default relations;
