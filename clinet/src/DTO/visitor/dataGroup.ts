export interface GroupPage {
    name: String;
    address: String;
    experience: String;
    telephine: String;
    typeGroup: String;
    socialList: Array<Social>;
    existRepetitionBase: Boolean;
    commerceProject: Boolean;
}

interface Social {
    link: String;
    name: String;
}
