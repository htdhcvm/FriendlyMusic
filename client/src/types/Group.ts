import Social from './Social';
import ParticipantGroup from './ParticipantGroup';

type Group = {
    name: string;
    description: string;
    experience: string;
    typeGroup: string;
    musicalGenre: string[];
    existRepetitionBase: boolean;
    commerceProject: boolean;
    listParticipantsGroup: ParticipantGroup[];
    address?: string;
    telephone?: string;
    email?: string;
    socialList?: Array<Social>;
    listVideos?: string[];
    avatar?: string;
    photos?: string[];
    latlon?: Array<number>;
};

export default Group;
