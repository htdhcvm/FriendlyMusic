import {
    Creator,
    FacebookCreator,
    InstagramCreator,
    SpotifyCreator,
    VkCreator,
    YandexMusicCreator,
    LinkedinCreator,
} from './SocialsCreators';

import { Social } from './SocialsTypes';

const typeDefinifition = (social: { name: string; link: string }): Creator => {
    let creator: Creator | undefined;

    switch (social.name) {
        case 'instagram':
            creator = new InstagramCreator();
            break;
        case 'spotify':
            creator = new SpotifyCreator();
            break;
        case 'vk':
            creator = new VkCreator();
            break;
        case 'facebook':
            creator = new FacebookCreator();
            break;
        case 'linkedin':
            creator = new LinkedinCreator();
            break;
        case 'yandexmusic':
            creator = new YandexMusicCreator();
            break;
    }

    return creator as Creator;
};

export const createSocials = (
    socials: Array<{ name: string; link: string }>
): Array<Social> => {
    const listSocials: Array<Social> = [];

    for (const social of socials) {
        const creator: Creator = typeDefinifition(social);
        listSocials.push(creator.create(social.link));
    }

    return listSocials;
};
