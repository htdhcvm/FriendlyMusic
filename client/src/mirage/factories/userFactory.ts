import faker from 'faker';

import professions from '../staticData/professions';
import qualities from '../staticData/qualities';
import { fillArray } from '../helpers/fillArray';

faker.locale = 'ru';

const User = {
    fio() {
        return `${faker.name.findName()}`;
    },
    dateBirthday() {
        const dateBirthday = faker.date
            .between('2015-01-01', '2015-01-05')
            .toString()
            .split(' ');
        return `${dateBirthday[0]} ${dateBirthday[1]} ${dateBirthday[2]} ${dateBirthday[3]}`;
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
        return professions[Math.floor(Math.random() * professions.length)];
    },
    musicInstrument() {
        return `crafter`;
    },
    description() {
        return `${faker.lorem.paragraphs()} \n ${faker.lorem.paragraphs()} \n ${faker.lorem.paragraphs()}`;
    },
    skills() {
        return faker.company.suffixes();
    },
    quality() {
        return fillArray(qualities, 20);
    },

    avatar() {
        return faker.internet.avatar();
    },
};

export default User;
