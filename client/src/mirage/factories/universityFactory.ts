import faker from 'faker';

const University = {
    id() {
        return faker.datatype.uuid();
    },
};

export default University;
