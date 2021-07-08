import faker from 'faker';

import { fillArray } from '../helpers/fillArray';
import musicGenre from '../staticData/musicGenre';
import { group } from '../staticData/login';
import passwords from '../staticData/passwords';
import videos from '../staticData/videos';
import typeGroup from '../staticData/typeGroup';
import expirense from '../staticData/expirense';

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
        return expirense[Math.floor(Math.random() * expirense.length)];
    },
    address() {
        return `${faker.address.county()} ${faker.address.city()} ${faker.address.streetAddress()}`;
    },
    email() {
        return faker.internet.email();
    },
    latlon() {
        return [+faker.address.latitude(), +faker.address.longitude()];
    },
    typeGroup() {
        return typeGroup[Math.floor(Math.random() * typeGroup.length)];
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
        return `${faker.image.people(1920, 600)}?random=${Date.now()}`;
    },
    photos() {
        return [
            faker.image.image(),
            faker.image.abstract(),
            faker.image.animals(),
            faker.image.business(),
            faker.image.cats(),
            faker.image.city(),
            faker.image.food(),
            faker.image.nightlife(),
            faker.image.fashion(),
            faker.image.people(),
            faker.image.nature(),
            faker.image.sports(),
            faker.image.technics(),
            faker.image.transport(),
        ];
    },
    videos() {
        return fillArray(videos, 20);
    },
};

export default Groups;
