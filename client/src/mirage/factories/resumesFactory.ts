import faker from 'faker';
import expirense from '../staticData/expirense';

import categoryMusicians from '../staticData/categoryMusicians';

const Resumes = {
    id() {
        return faker.datatype.uuid();
    },
    title() {
        return faker.name.title();
    },
    salary() {
        return faker.datatype.number();
    },

    date() {
        return faker.date.past();
    },
    experience() {
        return expirense[Math.floor(Math.random() * expirense.length)];
    },
    image() {
        return `${faker.image.city(1920, 600)}?random=${Date.now()}`;
    },
    kindActivity() {
        return categoryMusicians[
            Math.floor(Math.random() * categoryMusicians.length)
        ];
    },
};

export default Resumes;
