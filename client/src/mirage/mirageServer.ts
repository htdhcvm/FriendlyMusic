import { createServer, RestSerializer, Response } from 'miragejs';

import factories from './factories/bootstrap';
import relations from './relations';
import seeds from './seeds';

import comparePasswords from './helpers/comparePasswords';
import getHash from './helpers/getHash';

import jwt from 'jsonwebtoken';
import faker from 'faker';

const VERY_SECRET_KEY = 'VERY_SECRET_KEY';
const TIME_EXPIRE = 1000 * 60 * 60 * 24;

export const createMockServer = (environment = 'development') => {
    createServer({
        environment,
        serializers: {
            application: RestSerializer,
        },

        models: relations,
        factories: factories,

        seeds(server) {
            seeds(server);
        },

        routes() {
            this.namespace = 'api';

            this.get('/getAllModels', (schema) => {
                return {
                    users: schema.all('user').models,
                    resumes: schema.all('resume').models,
                    user_groups: schema.all('user_group').models,
                    refreshSessions: schema.all('refreshSession').models,
                    groups: schema.all('group').models,
                    vacancys: schema.all('vacancy').models,
                    socials: schema.all('social').models,
                    universities: schema.all('university').models,
                    courses: schema.all('course').models,
                    placeWorks: schema.all('placeWork').models,
                };
            });

            this.get(
                '/auth/registration/musician/:login/:fio/:password/:retPassword',
                async (schema, request) => {
                    try {
                        const { login, fio, password, retPassword } =
                            request.params;

                        const user = schema.findBy('user', { login });

                        if (user) {
                            return new Response(400);
                        }

                        const hash: string = await getHash(password);

                        schema.create('user', {
                            login,
                            fio,
                            password: hash,
                        });

                        const access_token = jwt.sign(
                            { login },
                            VERY_SECRET_KEY,
                            {
                                expiresIn: TIME_EXPIRE,
                            }
                        );
                        const refresh_session = faker.datatype.uuid();

                        schema.create('refreshSession', {
                            refreshToken: refresh_session,
                            userAgent: faker.internet.userAgent(),
                            fingerPrint: faker.datatype.uuid(),
                            ip: faker.internet.ip(),
                            expiresIn: +(Date.now() + TIME_EXPIRE),
                            createdAt: Date.now(),
                        });

                        document.cookie = `refresh-session=${refresh_session};  path=/;`;

                        return {
                            access_token,
                            loginAuth: login,
                        };
                    } catch (error) {
                        console.log(error);
                        return new Response(500);
                    }
                }
            );

            this.get(
                '/auth/authorization/musician/:login/:password',
                async (schema, request) => {
                    try {
                        const { login, password } = request.params;

                        const user = schema.findBy('user', { login });

                        if (user === null) return new Response(401);

                        const result = await comparePasswords({
                            password: password,
                            hash: user.password,
                        });

                        if (!result) return new Response(401);

                        const token_access = jwt.sign(
                            { login },
                            VERY_SECRET_KEY,
                            {
                                expiresIn: TIME_EXPIRE,
                            }
                        );
                        const refresh_session = faker.datatype.uuid();

                        schema.create('refreshSession', {
                            refreshToken: refresh_session,
                            userAgent: faker.internet.userAgent(),
                            fingerPrint: faker.datatype.uuid(),
                            ip: faker.internet.ip(),
                            expiresIn: +(Date.now() + TIME_EXPIRE),
                            createdAt: Date.now(),
                        });

                        document.cookie = `refresh-session=${refresh_session};  path=/;`;

                        return {
                            access_token: token_access,
                            loginAuth: login,
                        };
                    } catch (error) {
                        console.log(error);
                        return new Response(500);
                    }
                }
            );

            this.get(
                '/auth/authorization/group/:login/:password',
                async (schema, request) => {
                    try {
                        const { login, password } = request.params;

                        const group = schema.findBy('group', { login });

                        if (group === null) return new Response(401);

                        const result = await comparePasswords({
                            password: password,
                            hash: group.password,
                        });

                        if (!result) return new Response(401);

                        const token_access = jwt.sign(
                            { login },
                            VERY_SECRET_KEY,
                            {
                                expiresIn: TIME_EXPIRE,
                            }
                        );

                        const refresh_session = faker.datatype.uuid();

                        schema.create('refreshSession', {
                            refreshToken: refresh_session,
                            userAgent: faker.internet.userAgent(),
                            fingerPrint: faker.datatype.uuid(),
                            ip: faker.internet.ip(),
                            expiresIn: +(Date.now() + VERY_SECRET_KEY),
                            createdAt: Date.now(),
                        });

                        document.cookie = `refresh-session=${refresh_session};  path=/;`;

                        return {
                            access_token: token_access,
                            loginAuth: login,
                        };
                    } catch (error) {
                        console.log(error);
                        return new Response(500);
                    }
                }
            );

            this.get('/user/logout', (schema) => {
                const refreshToken = document.cookie.split('=')[1];

                schema
                    .findBy('refreshSession', {
                        refreshToken: refreshToken,
                    })
                    ?.destroy();

                return new Response(200);
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

            this.get(
                '/api/user/settings/consist/eventOnAddMemberInGroup',
                () => {
                    return { id: 1 };
                }
            );

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
};
