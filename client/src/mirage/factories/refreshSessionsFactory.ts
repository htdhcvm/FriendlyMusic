import faker from 'faker';

const RefreshSessions = {
    id() {
        return faker.datatype.uuid();
    },
};

export default RefreshSessions;
