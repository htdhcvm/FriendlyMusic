import { createServer, RestSerializer, Response } from 'miragejs';

import factories from './factories/bootstrap';
import relations from './relations';
import seeds from './seeds';

import comparePasswords from './helpers/comparePasswords';
import getHash from './helpers/getHash';

import jwt from 'jsonwebtoken';
import faker from 'faker';

import unique from './helpers/uniq';

import DTOVacancy from '../DTO/visitor/Vacancy';
import DTOResume from '../DTO/group/Resume';
import DTOGroupList from '../DTO/group/ResumesList';

const VERY_SECRET_KEY = 'VERY_SECRET_KEY';
const TIME_EXPIRE = 1000 * 60 * 60 * 24;

export const createMockServer = (environment = 'development') => {
    createServer({
        environment,
        serializers: {
            application: RestSerializer,
            vacancy: RestSerializer.extend({
                alwaysIncludeLinkageData: true,
                include: ['group'],
            }),
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

                        if (password !== retPassword) {
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

                        console.log(user.avatar);
                        return {
                            access_token: token_access,
                            loginAuth: login,
                            // avatar,
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

            this.get('/visitor/getListVacancy', (schema) => {
                let list: Array<{}> = [];

                schema.all('group').models.forEach((groupItem) => {
                    groupItem.vacancies.models.forEach((vacancy: any) => {
                        list.push({
                            id: vacancy.id,
                            title: vacancy.title,
                            image: vacancy.image,
                            price: vacancy.price,
                            date: vacancy.date,
                            groupName: groupItem.name,
                        });
                    });
                });

                return list;
            });

            this.get('/visitor/getCountCategory', (schema) => {
                let sumCount: {
                    [key: string]: {
                        count: number;
                        profession: string;
                        professionType: string;
                    };
                } = {};

                schema.all('vacancy').models.forEach((vacancy) => {
                    if (sumCount[vacancy.profession.type]) {
                        sumCount[vacancy.profession.type] = {
                            count: sumCount[vacancy.profession.type].count + 1,
                            profession:
                                sumCount[vacancy.profession.type].profession,
                            professionType:
                                sumCount[vacancy.profession.type]
                                    .professionType,
                        };
                    } else {
                        sumCount[vacancy.profession.type] = {
                            count: 1,
                            profession: vacancy.profession.description,
                            professionType: vacancy.profession.type,
                        };
                    }
                });

                return Object.values(sumCount);
            });

            this.get(
                '/visitor/getDataVacancy/:idVacancy',
                (schema, request) => {
                    const { idVacancy } = request.params;

                    const vacancy = schema.findBy('vacancy', { id: idVacancy });
                    if (vacancy === null) return new Response(400);

                    const group: any = vacancy.group;

                    const dataVacancy: DTOVacancy = {
                        title: vacancy.title,
                        experience: vacancy.experience,
                        description: vacancy.description,
                        requirement: vacancy.requirement,
                        responsibility: vacancy.responsibility,
                        offer: vacancy.offer,
                        willPlus: vacancy.willPlus,
                        quality: vacancy.quality,
                        skills: vacancy.skills,
                        image: vacancy.image,
                        profession: vacancy.profession,
                        date: vacancy.date.toString(),
                        priceStart: vacancy.priceStart,
                        priceEnd: vacancy.priceEnd,
                        groupData: {
                            idGroup: group.id,
                            name: group.name,
                            address: group.address,
                            avatar: group.avatar,
                            latlon: group.latlon,
                        },
                        socialLinks: unique(
                            group.socials.models.map((social: any) => {
                                return {
                                    name: social.type,
                                    link: social.link,
                                };
                            }),
                            'name'
                        ),
                    };
                    return dataVacancy;
                }
            );

            this.get('/group/getResume/:idResume', (schema, request) => {
                const { idResume } = request.params;

                const resume = schema.findBy('resume', { id: idResume });

                if (resume) {
                    const user: any = resume.user;

                    const courses = user.courses;
                    const universities = user.universities;
                    const placeWorks = user.placeWorks;
                    const socials = user.socials;

                    const DtoResume: DTOResume = {
                        title: resume.title,
                        fio: user.fio,
                        dateBirthday: user.dateBirthday,
                        gander: user.gander,
                        language: resume.language,
                        telephone: user.telephone,
                        address: user.address,
                        email: user.email,
                        site: user.site,
                        profession: user.profession,
                        musicInstrument: user.musicInstrument,
                        experience: resume.experience,
                        aboutYourSelf: user.description,
                        skills: user.skills,
                        quality: user.quality,
                        salary: resume.salary,
                        avatar: user.avatar,
                        kindActivity: resume.kindActivity,
                        socialList: unique(
                            socials.models.map((social: any) => {
                                return {
                                    name: social.type,
                                    link: social.link,
                                };
                            }),
                            'name'
                        ),

                        prevWorkList: placeWorks.models.map((work: any) => ({
                            name: work.name,
                            position: work.position,
                            link: work.link,
                            periodWork: {
                                start: work.start,
                                end: work.end,
                            },
                        })),

                        institutionList: universities.models.map(
                            (university: any) => ({
                                name: university.name,
                                nameFaculty: university.nameFaculty,
                                qualification: university.qualification,
                                timeEducation: {
                                    start: university.start,
                                    end: university.end,
                                },
                            })
                        ),

                        coursesList: courses.models.map((course: any) => ({
                            name: course.nameSchool,
                            nameSchool: course.name,
                            timeEducation: {
                                start: course.start,
                                end: course.end,
                            },
                        })),
                    };

                    return DtoResume;
                }
                return new Response(400);
            });

            this.get('/group/getListResumes', (schema) => {
                const groupList: DTOGroupList = [];

                schema.all('resume').models.forEach((resume) => {
                    const user: any = resume.user;

                    groupList.push({
                        id: resume.id,
                        title: resume.title,
                        image: resume.image,
                        userName: user.fio,
                        date: resume.date.toString(),
                        price: resume.salary,
                    });
                });

                return groupList;
            });

            this.get('/visitor/getListVacancy/:name', () => {
                return { id: 1 };
            });

            this.get('/visitor/getDataGroup/:idGroup', () => {
                return { id: 1 };
            });

            this.get(
                '/user/search/:keyWord/:city/:positionGroup/:experience/:countVacancyOnPage/:salary/:existBase/:existMaterial/:existNumberPhone/:linkSocial',
                () => {
                    return { id: 1 };
                }
            );

            this.get('/user/settings/dataUser/owner/:idUser', () => {
                return { id: 1 };
            });

            this.get('/user/settings/changeDataUser', () => {
                return { id: 1 };
            });

            this.get('/user/settings/createGroup', () => {
                return { id: 1 };
            });

            this.get('/user/settings/getDataGroup/consist/:idUser', () => {
                return { id: 1 };
            });

            this.get('/user/settings/consist/eventOnAddMemberInGroup', () => {
                return { id: 1 };
            });

            this.get(
                '/user/settings/consist/eventOnCancelMemberInGroup',
                () => {
                    return { id: 1 };
                }
            );

            this.get(
                '/user/settings/consist/eventOnDeleteMemberGroupAgree',
                () => {
                    return { id: 1 };
                }
            );

            this.get(
                '/user/settings/consist/eventOnDeleteMemberGroupDisagree',
                () => {
                    return { id: 1 };
                }
            );
        },
    });
};
