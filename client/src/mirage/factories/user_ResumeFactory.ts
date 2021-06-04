import faker from 'faker';

const User_Resumes = {
    id() {
        return faker.datatype.uuid();
    },
};

export default User_Resumes;
