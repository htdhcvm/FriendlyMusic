import faker from 'faker';

const Socials = {
    id() {
        return faker.datatype.uuid();
    },
};

export default Socials;
