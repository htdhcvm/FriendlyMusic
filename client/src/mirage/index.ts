import { createServer } from 'miragejs';

import factories from './factories/bootstrap';
import relations from './relations';

createServer({
    models: relations,
    factories: factories,

    seeds(server) {
        // server.createList('user', 5);
        // server.createList('refreshSession', 5);
        // server.createList('vacancy', 5);
        // server.createList('course', 5);
        // server.createList('university', 5);
        // server.createList('user', 2).forEach((user) => {
        //     server.createList('refreshSession', 2, { user });
        // });
    },

    routes() {
        this.namespace = 'api';

        this.get('/movies', (schema) => {
            return {
                users: schema.all('user').models,
                refreshSessions: schema.all('refreshSession').models,
                // vacancies: schema.all('vacancies').models,
                // courses: schema.all('courses').models,
                // universities: schema.all('university').models,
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
