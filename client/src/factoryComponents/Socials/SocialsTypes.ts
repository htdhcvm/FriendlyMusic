export interface Social {
    name: string;
    link: string;
    image: string;
}

export class Facebook implements Social {
    name: string = 'facebook';
    image: string = '/assets/social/facebookColors.png';
    link: string;

    constructor(link: string) {
        this.link = link;
    }
}

export class Instagram implements Social {
    name: string = 'instagram';
    image: string = '/assets/social/instagram.png';
    link: string;

    constructor(link: string) {
        this.link = link;
    }
}

export class Spotify implements Social {
    name: string = 'spotify';
    image: string = '/assets/social/spotifyColor.png';
    link: string;

    constructor(link: string) {
        this.link = link;
    }
}

export class Vk implements Social {
    name: string = 'vk';
    image: string = '/assets/social/vk-logoColor.png';
    link: string;

    constructor(link: string) {
        this.link = link;
    }
}

export class YandexMusic implements Social {
    name: string = 'yandexMusic';
    image: string = '/assets/social/yandexColor.png';
    link: string;

    constructor(link: string) {
        this.link = link;
    }
}

export class Linkedin implements Social {
    name: string = 'linkedin';
    image: string = '/assets/social/linkedin.png';
    link: string;

    constructor(link: string) {
        this.link = link;
    }
}
