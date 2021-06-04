import { createServer } from 'miragejs';

import factories from './factories/bootstrap';
import relations from './relations';

createServer({
    models: relations,
    factories: factories,

    seeds(server) {
        server.createList('user', 5);
    },

    routes() {
        this.namespace = 'api';

        this.get('/movies', (schema) => {
            return schema.all('user');
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
