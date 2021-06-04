import faker from 'faker';

const User = {
    id() {
        return faker.datatype.uuid();
    },
    fio() {
        return `${faker.name.firstName()} ${faker.name.middleName()} ${faker.name.lastName()}`;
    },
    dateBirthday() {
        return;
    },
    login() {
        return faker.internet.userName();
    },
    password() {
        return faker.internet.password();
    },
    gander() {
        return faker.name.gender();
    },
    telephone() {
        return faker.phone.phoneNumber();
    },
    address() {
        return `${faker.address.county()} ${faker.address.city()} ${faker.address.streetAddress()}`;
    },
    email() {
        return faker.internet.email();
    },
    site() {
        return faker.internet.url();
    },
    profession() {
        return `${faker.company.suffixes()} ${faker.company.companyName()}`;
    },
    musicInstrument() {
        return `crafter`;
    },
    description() {
        return `${faker.lorem.paragraphs()} \n ${faker.lorem.paragraphs()} \n ${faker.lorem.paragraphs()}`;
    },
    skills() {
        return;
    },
    quality() {
        return;
    },
    avatar() {
        return;
    },
};

export default User;
