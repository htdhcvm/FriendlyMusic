export interface TypeMusician {
    count: number;
    image: string;
    type: string;
}

class Conductor implements TypeMusician {
    public image: string = '/assets/onTypeMusician/conductor.png';
    public type: string = 'conductor';
    public count: number;

    constructor(count: number) {
        this.count = count;
    }
}

class Contrabass implements TypeMusician {
    public image: string = '/assets/onTypeMusician/contrabass.png';
    public type: string = 'contrabass';
    public count: number;

    constructor(count: number) {
        this.count = count;
    }
}

class Dj implements TypeMusician {
    public image: string = '/assets/onTypeMusician/dj.png';
    public type: string = 'drummer';
    public count: number;

    constructor(count: number) {
        this.count = count;
    }
}

class Drummer implements TypeMusician {
    public image: string = '/assets/onTypeMusician/drummer.png';
    public type: string = 'electricGuitarBass';
    public count: number;

    constructor(count: number) {
        this.count = count;
    }
}

class ElectricGuitarBass implements TypeMusician {
    public image: string = '/assets/onTypeMusician/electric-guitarBass.png';
    public type: string = 'electricGuitarRitm';
    public count: number;

    constructor(count: number) {
        this.count = count;
    }
}

class ElectricGuitarRitm implements TypeMusician {
    public image: string = '/assets/onTypeMusician/electric-guitarRitm.png';
    public type: string = 'electricGuitarSolo';
    public count: number;

    constructor(count: number) {
        this.count = count;
    }
}

class ElectricGuitarSolo implements TypeMusician {
    public image: string = '/assets/onTypeMusician/electric-guitarSolo.png';
    public type: string = 'guitarClassic';
    public count: number;

    constructor(count: number) {
        this.count = count;
    }
}

class GuitarClassic implements TypeMusician {
    public image: string = '/assets/onTypeMusician/guitarClassic.png';
    public type: string = 'musicTeacher';
    public count: number;

    constructor(count: number) {
        this.count = count;
    }
}

class MusicTeacher implements TypeMusician {
    public image: string = '/assets/onTypeMusician/music-teacher.png';
    public type: string = 'piano';
    public count: number;

    constructor(count: number) {
        this.count = count;
    }
}

class Piano implements TypeMusician {
    public image: string = '/assets/onTypeMusician/piano.png';
    public type: string = 'singer';
    public count: number;

    constructor(count: number) {
        this.count = count;
    }
}

class Singer implements TypeMusician {
    public image: string = '/assets/onTypeMusician/singer.png';
    public type: string = 'dj';
    public count: number;

    constructor(count: number) {
        this.count = count;
    }
}

class Violin implements TypeMusician {
    public image: string = '/assets/onTypeMusician/violin.png';
    public type: string = 'violin';
    public count: number;

    constructor(count: number) {
        this.count = count;
    }
}

class Violinist implements TypeMusician {
    public image: string = '/assets/onTypeMusician/violinist.png';
    public type: string = 'violinist';
    public count: number;

    constructor(count: number) {
        this.count = count;
    }
}

const createMusicians = (
    musicians: Array<{
        count: number;
        profession: string;
        professionType: string;
    }>
) => {
    const listMusicians = [];

    for (const musician of musicians) {
        if (musician.professionType === 'conductor')
            listMusicians.push(new Conductor(musician.count));
        if (musician.professionType === 'contrabass')
            listMusicians.push(new Contrabass(musician.count));
        if (musician.professionType === 'drummer')
            listMusicians.push(new Dj(musician.count));
        if (musician.professionType === 'electricGuitarBass')
            listMusicians.push(new Drummer(musician.count));
        if (musician.professionType === 'electricGuitarRitm')
            listMusicians.push(new ElectricGuitarBass(musician.count));
        if (musician.professionType === 'electricGuitarSolo')
            listMusicians.push(new ElectricGuitarRitm(musician.count));
        if (musician.professionType === 'guitarClassic')
            listMusicians.push(new ElectricGuitarSolo(musician.count));
        if (musician.professionType === 'musicTeacher')
            listMusicians.push(new GuitarClassic(musician.count));
        if (musician.professionType === 'piano')
            listMusicians.push(new MusicTeacher(musician.count));
        if (musician.professionType === 'singer')
            listMusicians.push(new Piano(musician.count));
        if (musician.professionType === 'dj')
            listMusicians.push(new Singer(musician.count));
        if (musician.professionType === 'violin')
            listMusicians.push(new Violin(musician.count));
        if (musician.professionType === 'violinist')
            listMusicians.push(new Violinist(musician.count));
    }

    return listMusicians;
};

export default createMusicians;
