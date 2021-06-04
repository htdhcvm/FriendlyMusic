import faker from 'faker';

const Resumes = {
    id() {
        return faker.datatype.uuid();
    },
    avatar() {
        return faker.image.avatar();
    },
    title() {
        return faker.name.title();
    },
    salary() {
        return faker.datatype.number();
    },
    language() {
        return 'ru';
    },
};

export default Resumes;
