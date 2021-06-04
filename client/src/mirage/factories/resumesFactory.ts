import faker from 'faker';

const Resumes = {
    id() {
        return faker.datatype.uuid();
    },
};

export default Resumes;
