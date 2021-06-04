import faker from 'faker';

const DataScopes = {
    id() {
        return faker.datatype.uuid();
    },
};

export default DataScopes;
