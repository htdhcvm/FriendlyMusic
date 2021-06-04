import { belongsTo, hasMany, Model } from 'miragejs';

const relations = {
    user: Model.extend({
        refreshSessions: hasMany(),
        courses: hasMany(),
        universities: hasMany(),
        placeWorks: hasMany(),
        socials: hasMany(),
        group: belongsTo(),
        resumes: hasMany(),
    }),
    refreshSession: Model.extend({
        user: belongsTo(),
    }),
    course: Model.extend({
        user: belongsTo(),
        dataScope: belongsTo(),
    }),
    university: Model.extend({
        user: belongsTo(),
        dataScope: belongsTo(),
    }),
    placeWork: Model.extend({
        user: belongsTo(),
        dataScope: belongsTo(),
    }),

    dataScope: Model.extend({
        course: belongsTo(),
        university: belongsTo(),
        placeWork: belongsTo(),
    }),

    group: Model.extend({
        user: belongsTo(),
        socials: hasMany(),
        vacancies: hasMany(),
    }),

    social: Model.extend({
        user: belongsTo(),
        group: belongsTo(),
    }),

    vacancy: Model.extend({
        group: belongsTo(),
    }),
    resume: Model.extend({
        users: belongsTo(),
    }),
};

export default relations;
