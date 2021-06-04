import faker from 'faker';

const Group_vacancies = {
    id() {
        return faker.datatype.uuid();
    },
};

export default Group_vacancies;
