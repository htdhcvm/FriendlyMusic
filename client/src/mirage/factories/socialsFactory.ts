import faker from 'faker';

const socials = [
    'instagram',
    'spotify',
    'vk',
    'facebook',
    'linkedin',
    'yandexmusic',
];

const Socials = {
    id() {
        return faker.datatype.uuid();
    },

    type() {
        return socials[Math.floor(Math.random() * socials.length)];
    },

    link() {
        return faker.internet.url();
    },
};

export default Socials;
