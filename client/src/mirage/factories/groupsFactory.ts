import faker from 'faker';

const Groups = {
    id() {
        return faker.datatype.uuid();
    },
};

export default Groups;
