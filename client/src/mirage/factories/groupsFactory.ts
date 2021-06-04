import faker from 'faker';

import { fillArray } from '../helpers/fillArray';
import musicGenre from '../staticData/musicGenre';

const Groups = {
    id() {
        return faker.datatype.uuid();
    },
    name() {
        return faker.name.findName();
    },
    experience() {
        return faker.datatype.number();
    },
    address() {
        return `${faker.address.county()} ${faker.address.city()} ${faker.address.streetAddress()}`;
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
