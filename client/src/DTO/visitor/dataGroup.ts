export interface GroupPage {
    name: String;
    address: String;
    experience: String;
    telephone: String;
    typeGroup: String;
    socialList: Array<Social>;
    existRepetitionBase: boolean;
    commerceProject: boolean;
}

interface Social {
    link: String;
    name: String;
}
