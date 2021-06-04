import faker from 'faker';

const Vacancies = {
    id() {
        return faker.datatype.uuid();
    },
};

export default Vacancies;
