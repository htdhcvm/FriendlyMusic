import faker from 'faker';

import expirense from '../staticData/expirense';
import qualities from '../staticData/qualities';
import requirements from '../staticData/requirements';
import conditions from '../staticData/conditions';
import offers from '../staticData/offers';
import { fillArray } from '../helpers/fillArray';

import categoriesMusicians from '../staticData/categoryMusicians';

const Vacancy = {
    id() {
        return faker.datatype.uuid();
    },
    image() {
        return `${faker.image.city(1920, 600)}?random=${Date.now()}`;
    },
    title() {
        return faker.name.jobTitle();
    },

    profession() {
        return categoriesMusicians[
            Math.floor(Math.random() * categoriesMusicians.length)
        ];
    },
    experience() {
        return expirense[Math.floor(Math.random() * expirense.length)];
    },
    description() {
        return `${faker.lorem.paragraphs()} \n ${faker.lorem.paragraphs()} \n ${faker.lorem.paragraphs()}`;
    },
    skills() {
        return Array.from(
            new Set(
                new Array(Math.floor(Math.random() * 30) + 1)
                    .fill(null)
                    .map((_) => faker.company.catchPhraseAdjective())
            )
        );
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
    priceStart() {
        return +faker.commerce.price() * (Math.random() < 0.5 ? 100 : 10);
    },
    priceEnd() {
        return +faker.commerce.price() * (Math.random() < 0.5 ? 1000 : 100);
    },
    date() {
        return faker.date.past();
    },
};

export default Vacancy;
