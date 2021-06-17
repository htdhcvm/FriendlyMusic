export interface TypeMusician {
    count: number;
    image: string;
    type: string;
}

export class Conductor implements TypeMusician {
    public image: string = '/assets/onTypeMusician/conductor.png';
    public type: string = 'conductor';
    public count: number;

    constructor(count: number) {
        this.count = count;
    }
}

export class Contrabass implements TypeMusician {
    public image: string = '/assets/onTypeMusician/contrabass.png';
    public type: string = 'contrabass';
    public count: number;

    constructor(count: number) {
        this.count = count;
    }
}

export class Dj implements TypeMusician {
    public image: string = '/assets/onTypeMusician/dj.png';
    public type: string = 'drummer';
    public count: number;

    constructor(count: number) {
        this.count = count;
    }
}

export class Drummer implements TypeMusician {
    public image: string = '/assets/onTypeMusician/drummer.png';
    public type: string = 'electricGuitarBass';
    public count: number;

    constructor(count: number) {
        this.count = count;
    }
}

export class ElectricGuitarBass implements TypeMusician {
    public image: string = '/assets/onTypeMusician/electric-guitarBass.png';
    public type: string = 'electricGuitarRitm';
    public count: number;

    constructor(count: number) {
        this.count = count;
    }
}

export class ElectricGuitarRitm implements TypeMusician {
    public image: string = '/assets/onTypeMusician/electric-guitarRitm.png';
    public type: string = 'electricGuitarSolo';
    public count: number;

    constructor(count: number) {
        this.count = count;
    }
}

export class ElectricGuitarSolo implements TypeMusician {
    public image: string = '/assets/onTypeMusician/electric-guitarSolo.png';
    public type: string = 'guitarClassic';
    public count: number;

    constructor(count: number) {
        this.count = count;
    }
}

export class GuitarClassic implements TypeMusician {
    public image: string = '/assets/onTypeMusician/guitarClassic.png';
    public type: string = 'musicTeacher';
    public count: number;

    constructor(count: number) {
        this.count = count;
    }
}

export class MusicTeacher implements TypeMusician {
    public image: string = '/assets/onTypeMusician/music-teacher.png';
    public type: string = 'piano';
    public count: number;

    constructor(count: number) {
        this.count = count;
    }
}

export class Piano implements TypeMusician {
    public image: string = '/assets/onTypeMusician/piano.png';
    public type: string = 'singer';
    public count: number;

    constructor(count: number) {
        this.count = count;
    }
}

export class Singer implements TypeMusician {
    public image: string = '/assets/onTypeMusician/singer.png';
    public type: string = 'dj';
    public count: number;

    constructor(count: number) {
        this.count = count;
    }
}

export class Violin implements TypeMusician {
    public image: string = '/assets/onTypeMusician/violin.png';
    public type: string = 'violin';
    public count: number;

    constructor(count: number) {
        this.count = count;
    }
}

export class Violinist implements TypeMusician {
    public image: string = '/assets/onTypeMusician/violinist.png';
    public type: string = 'violinist';
    public count: number;

    constructor(count: number) {
        this.count = count;
    }
}
