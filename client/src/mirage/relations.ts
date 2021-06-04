import { belongsTo, hasMany, Model } from 'miragejs';

const relations = {
    user: Model.extend({
        refreshSessions: hasMany(),
        courses: hasMany(),
        universitys: hasMany(),
        placeWorks: hasMany(),
        socials: hasMany(),
        group: belongsTo(),
        resume: hasMany(),
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
        vacancy: hasMany(),
    }),

    social: Model.extend({
        user: belongsTo(),
        group: belongsTo(),
    }),

    vacancy: Model.extend({
        groups: hasMany(),
    }),
    resume: Model.extend({
        users: hasMany(),
    }),
};

export default relations;
