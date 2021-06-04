import faker from 'faker';

const RefreshSessions = {
    refreshToken() {
        return faker.datatype.uuid();
    },
    userAgent() {
        return faker.internet.userAgent();
    },
    fingerPrint() {
        return faker.datatype.uuid();
    },
    ip() {
        return faker.internet.ip();
    },
    expiresIn() {
        return Date.now() + 1000 * 60 * 60 * 24;
    },
    createdAt() {
        return Date.now();
    },
};

export default RefreshSessions;
