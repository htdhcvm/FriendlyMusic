import faker from 'faker';

import { fillArray } from '../helpers/fillArray';
import musicGenre from '../staticData/musicGenre';
import { group } from '../staticData/login';
import passwords from '../staticData/passwords';

const Groups = {
    id() {
        return faker.datatype.uuid();
    },
    name() {
        return faker.name.findName();
    },
    login(i: number) {
        return group[i];
    },
    password(i: number) {
        return passwords[i];
    },
    experience() {
        return faker.datatype.number();
    },
    address() {
        return `${faker.address.county()} ${faker.address.city()} ${faker.address.streetAddress()}`;
    },

    latlon() {
        return [faker.address.latitude(), faker.address.longitude()];
    },

    telephone() {
        return faker.phone.phoneNumber();
    },
    musicalGenre() {
        return fillArray(musicGenre, Math.floor(Math.random() * 10 + 1));
    },
    repetitionBase() {
        return faker.datatype.boolean();
    },
    commerceProject() {
        return faker.datatype.boolean();
    },
    description() {
        return faker.lorem.paragraphs();
    },
    avatar() {
        return faker.image.avatar();
    },
};

export default Groups;
