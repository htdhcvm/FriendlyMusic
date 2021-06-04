import faker from 'faker';

const Courses = {
    id() {
        return faker.datatype.uuid();
    },
};

export default Courses;
