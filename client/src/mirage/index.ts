import { createServer, RestSerializer } from 'miragejs';

import factories from './factories/bootstrap';
import relations from './relations';

createServer({
    serializers: {
        application: RestSerializer,
    },

    models: relations,
    factories: factories,

    seeds(server) {
        server.createList('user', 8).forEach((user) => {
            server.createList(
                'resume',
                Math.floor(Math.random() * 2) + 1,
                user
            );
            server.createList('social', Math.floor(Math.random() * 5) + 1, {
                user,
            });
            server.createList('refreshSession', 1, { user });

            server.createList('university', Math.floor(Math.random() * 5) + 1, {
                user,
                dataScope: server.create('dataScope'),
            });
            server.createList('course', Math.floor(Math.random() * 5) + 1, {
                user,
                dataScope: server.create('dataScope'),
            });
            server.createList('placeWork', Math.floor(Math.random() * 5) + 1, {
                user,
                dataScope: server.create('dataScope'),
            });
        });

        server.createList('user', 4).forEach((user) => {
            server.create('group', {
                user: user,
                vacancies: server.createList(
                    'vacancy',
                    Math.floor(Math.random() * 5) + 1
                ),
                socials: server.createList(
                    'social',
                    Math.floor(Math.random() * 5) + 1
                ),
            });
        });
    },

    routes() {
        this.namespace = 'api';

        this.get('/movies', (schema) => {
            return {
                users: schema.all('user').models,
                resumes: schema.all('resume').models,
                refreshSessions: schema.all('refreshSession').models,
                groups: schema.all('group').models,
                vacancys: schema.all('vacancy').models,
                socials: schema.all('social').models,
                universities: schema.all('university').models,
                courses: schema.all('course').models,
                placeWorks: schema.all('placeWork').models,
            };
        });

        this.get('/api/visitor/getListVacancy', () => {
            return { id: 1 };
        });

        this.get('/api/visitor/getListVacancy/:name', () => {
            return { id: 1 };
        });

        this.get('/api/visitor/getDataVacancy/:idVacancy', () => {
            return { id: 1 };
        });

        this.get('/api/visitor/getDataGroup/:idGroup', () => {
            return { id: 1 };
        });

        this.get('/api/user/signIn/:login/:password', () => {
            return { id: 1 };
        });

        this.get('/api/user/registration', () => {
            return { id: 1 };
        });

        this.get('/api/user/getCountOnTypeVacancy', () => {
            return { id: 1 };
        });

        this.get(
            '/api/user/search/:keyWord/:city/:positionGroup/:experience/:countVacancyOnPage/:salary/:existBase/:existMaterial/:existNumberPhone/:linkSocial',
            () => {
                return { id: 1 };
            }
        );

        this.get('/api/visitor/getDataVacancy/:idVacancy', () => {
            return { id: 1 };
        });

        this.get('/api/user/settings/dataUser/owner/:idUser', () => {
            return { id: 1 };
        });

        this.get('/api/user/settings/changeDataUser', () => {
            return { id: 1 };
        });

        this.get('/api/user/settings/createGroup', () => {
            return { id: 1 };
        });

        this.get('/api/user/settings/getDataGroup/consist/:idUser', () => {
            return { id: 1 };
        });

        this.get('/api/user/settings/consist/eventOnAddMemberInGroup', () => {
            return { id: 1 };
        });

        this.get(
            '/api/user/settings/consist/eventOnCancelMemberInGroup',
            () => {
                return { id: 1 };
            }
        );

        this.get(
            '/api/user/settings/consist/eventOnDeleteMemberGroupAgree',
            () => {
                return { id: 1 };
            }
        );

        this.get(
            '/api/user/settings/consist/eventOnDeleteMemberGroupDisagree',
            () => {
                return { id: 1 };
            }
        );
    },
});
