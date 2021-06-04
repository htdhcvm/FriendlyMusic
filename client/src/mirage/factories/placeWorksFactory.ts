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
};

export default PlaceWorks;
