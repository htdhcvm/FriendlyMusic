import {
    ConductorCreator,
    ContrabassCreator,
    DjCreator,
    DrummerCreator,
    ElectricGuitarBassCreator,
    ElectricGuitarRitmCreator,
    ElectricGuitarSoloCreator,
    GuitarClassicCreator,
    MusicTeacherCreator,
    PianoCreator,
    SingerCreator,
    ViolinCreator,
    ViolinistCreator,
    Creator,
} from './MusiciansCreators';

const typeDefinitionCreator = (professionType: string): Creator => {
    let creator: Creator | undefined;

    switch (professionType) {
        case 'conductor':
            creator = new ConductorCreator();
            break;
        case 'contrabass':
            creator = new ContrabassCreator();
            break;
        case 'drummer':
            creator = new DjCreator();
            break;
        case 'electricGuitarBass':
            creator = new DrummerCreator();
            break;
        case 'electricGuitarRitm':
            creator = new ElectricGuitarBassCreator();
            break;
        case 'electricGuitarSolo':
            creator = new ElectricGuitarRitmCreator();
            break;
        case 'guitarClassic':
            creator = new ElectricGuitarSoloCreator();
            break;
        case 'musicTeacher':
            creator = new GuitarClassicCreator();
            break;
        case 'piano':
            creator = new MusicTeacherCreator();
            break;
        case 'singer':
            creator = new PianoCreator();
            break;
        case 'dj':
            creator = new SingerCreator();
            break;
        case 'violin':
            creator = new ViolinCreator();
            break;
        case 'violinist':
            creator = new ViolinistCreator();
            break;
    }

    return creator as Creator;
};

export const createMusicians = (
    musicians: Array<{
        count: number;
        profession: string;
        professionType: string;
    }>
) => {
    const listMusicians = [];

    for (const musician of musicians) {
        const creator: Creator = typeDefinitionCreator(musician.professionType);
        listMusicians.push(creator.create(musician.profession, musician.count));
    }

    return listMusicians;
};

export const createMusician = (musician: {
    profession: string;
    professionType: string;
}) => {
    const creator: Creator = typeDefinitionCreator(musician.professionType);
    return creator.create(musician.profession);
};
