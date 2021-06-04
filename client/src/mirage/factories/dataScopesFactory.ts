import faker from 'faker';

const DataScopes = {
    id() {
        return faker.datatype.uuid();
    },
    start() {
        return faker.date.between('2015-01-01', '2017-01-05');
    },

    end() {
        return faker.date.between('2017-01-01', '2021-01-05');
    },
};

export default DataScopes;
