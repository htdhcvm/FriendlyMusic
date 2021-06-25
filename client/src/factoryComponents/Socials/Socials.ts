abstract class Creator {
    abstract factoryCreate(link: string): Social;

    create(link: string): Social {
        return this.factoryCreate(link);
    }
}

class FacebookCreator extends Creator {
    factoryCreate(link: string): Social {
        return new Facebook(link);
    }
}

class InstagramCreator extends Creator {
    factoryCreate(link: string): Social {
        return new Instagram(link);
    }
}
class SpotifyCreator extends Creator {
    factoryCreate(link: string): Social {
        return new Spotify(link);
    }
}
class VkCreator extends Creator {
    factoryCreate(link: string): Social {
        return new Vk(link);
    }
}
class YandexMusicCreator extends Creator {
    factoryCreate(link: string): Social {
        return new YandexMusic(link);
    }
}
class LinkedinCreator extends Creator {
    factoryCreate(link: string): Social {
        return new Linkedin(link);
    }
}

interface Social {
    name: string;
    link: string;
    image: string;
}

class Facebook implements Social {
    name: string = 'facebook';
    image: string = '/assets/social/facebookColors.png';
    link: string;

    constructor(link: string) {
        this.link = link;
    }
}

class Instagram implements Social {
    name: string = 'instagram';
    image: string = '/assets/social/instagram.png';
    link: string;

    constructor(link: string) {
        this.link = link;
    }
}

class Spotify implements Social {
    name: string = 'spotify';
    image: string = '/assets/social/spotifyColor.png';
    link: string;

    constructor(link: string) {
        this.link = link;
    }
}

class Vk implements Social {
    name: string = 'vk';
    image: string = '/assets/social/vk-logoColor.png';
    link: string;

    constructor(link: string) {
        this.link = link;
    }
}

class YandexMusic implements Social {
    name: string = 'yandexMusic';
    image: string = '/assets/social/yandexColor.png';
    link: string;

    constructor(link: string) {
        this.link = link;
    }
}

class Linkedin implements Social {
    name: string = 'linkedin';
    image: string = '/assets/social/linkedin.png';
    link: string;

    constructor(link: string) {
        this.link = link;
    }
}

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
