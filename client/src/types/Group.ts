import Social from './Social';

type Group = {
    name: String;
    address: String;
    experience: String;
    telephone: String;
    typeGroup: String;
    socialList: Array<Social>;
    existRepetitionBase: boolean;
    commerceProject: boolean;
};

export default Group;
