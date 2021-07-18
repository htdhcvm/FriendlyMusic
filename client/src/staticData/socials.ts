export type Description =
    | 'Facebook'
    | 'Instagram'
    | 'Spotify'
    | 'Vkontakte'
    | 'YandexMusic'
    | 'Linkedin';

export type Type = 'fb' | 'inst' | 'sp' | 'vk' | 'ym' | 'li';

export type SocialSelect = { type: Type; description: Description };

const socials: SocialSelect[] = [
    {
        type: 'fb',
        description: 'Facebook',
    },
    {
        type: 'inst',
        description: 'Instagram',
    },
    {
        type: 'sp',
        description: 'Spotify',
    },
    {
        type: 'vk',
        description: 'Vkontakte',
    },
    {
        type: 'ym',
        description: 'YandexMusic',
    },
    {
        type: 'li',
        description: 'Linkedin',
    },
];

export default socials;
