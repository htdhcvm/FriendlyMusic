import faker from 'faker';

const PlaceWorks = {
    id() {
        return faker.datatype.uuid();
    },
    name() {
        return faker.company.companyName();
    },
    position() {
        return faker.company.catchPhrase();
    },
    link() {
        return faker.internet.url();
    },
    start() {
        return faker.date.past();
    },
    end() {
        return faker.date.past();
    },
};

export default PlaceWorks;
