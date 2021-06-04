import faker from 'faker';

const PlaceWorks = {
    id() {
        return faker.datatype.uuid();
    },
};

export default PlaceWorks;
