import faker from 'faker';

import professions from '../staticData/professions';
import expirense from '../staticData/expirense';
import qualities from '../staticData/qualities';
import requirements from '../staticData/requirements';
import conditions from '../staticData/conditions';
import offers from '../staticData/offers';

import { fillArray } from '../helpers/fillArray';

const Vacancy = {
    id() {
        return faker.datatype.uuid();
    },
    image() {
        return `${faker.image.city()}?random=${Date.now()}`;
    },
    title() {
        return faker.name.jobTitle();
    },
    profession() {
        return professions[Math.floor(Math.random() * professions.length)];
    },
    experience() {
        return expirense[Math.floor(Math.random() * expirense.length)];
    },
    description() {
        return `${faker.lorem.paragraphs()} \n ${faker.lorem.paragraphs()} \n ${faker.lorem.paragraphs()}`;
    },
    skills() {
        return faker.company.suffixes();
    },
    quality() {
        return fillArray(qualities, 20);
    },
    requirement() {
        return fillArray(requirements, 20);
    },
    responsibility() {
        return 'за себя и аппаратуру';
    },
    willPlus() {
        return fillArray(requirements, 20);
    },
    offer() {
        return fillArray(offers, 20);
    },
    condition() {
        return fillArray(conditions, 20);
    },
    price() {
        return faker.commerce.price();
    },
    date() {
        return faker.date.past();
    },
};

export default Vacancy;
