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
};

export default Courses;
