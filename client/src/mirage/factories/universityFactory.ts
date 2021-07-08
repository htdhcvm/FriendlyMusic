import faker from 'faker';

import qualifications from '../staticData/qualifications';

const University = {
    id() {
        return faker.datatype.uuid();
    },
    name() {
        return faker.company.companyName();
    },

    nameFaculty() {
        return faker.company.catchPhrase();
    },

    qualification() {
        return qualifications[
            Math.floor(Math.random() * qualifications.length)
        ];
    },

    start() {
        return faker.date.past();
    },
    end() {
        return faker.date.past();
    },
};

export default University;
