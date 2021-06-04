import faker from 'faker';

const socials = ['instagram', 'vk', 'facebook', 'linkedin'];
const Socials = {
    id() {
        return faker.datatype.uuid();
    },

    type() {
        return socials[Math.floor(Math.random() * socials.length)];
    },

    name() {
        return faker.internet.url();
    },
};

export default Socials;
