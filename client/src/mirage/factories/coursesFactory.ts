import faker from 'faker';

const Courses = {
    id() {
        return faker.datatype.uuid();
    },
    nameSchool() {
        return faker.company.companyName();
    },
    name() {
        return faker.company.catchPhrase();
    },
    start() {
        return faker.date.past();
    },
    end() {
        return faker.date.past();
    },
};

export default Courses;
