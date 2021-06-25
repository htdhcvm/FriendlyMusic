import {
    Facebook,
    Instagram,
    Spotify,
    Vk,
    YandexMusic,
    Linkedin,
    Social,
} from './SocialsTypes';

export abstract class Creator {
    abstract factoryCreate(link: string): Social;

    create(link: string): Social {
        return this.factoryCreate(link);
    }
}

export class FacebookCreator extends Creator {
    factoryCreate(link: string): Social {
        return new Facebook(link);
    }
}

export class InstagramCreator extends Creator {
    factoryCreate(link: string): Social {
        return new Instagram(link);
    }
}
export class SpotifyCreator extends Creator {
    factoryCreate(link: string): Social {
        return new Spotify(link);
    }
}
export class VkCreator extends Creator {
    factoryCreate(link: string): Social {
        return new Vk(link);
    }
}
export class YandexMusicCreator extends Creator {
    factoryCreate(link: string): Social {
        return new YandexMusic(link);
    }
}
export class LinkedinCreator extends Creator {
    factoryCreate(link: string): Social {
        return new Linkedin(link);
    }
}
