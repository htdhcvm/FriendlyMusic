export interface DataVacancy {
    fromOffer: String;
    title: String;
    groupData: Group;
    socialLinks: Array<SocialLink>;
    experience: String;
    description: String;
    requirement: String;
    responsibility?: String;
    offer?: String;
    quality?: String;
    skills?: String;
    address?: String;
}

interface Group {
    name: String;
    idGroup: String;
}
interface SocialLink {
    name: String;
    link: String;
}
