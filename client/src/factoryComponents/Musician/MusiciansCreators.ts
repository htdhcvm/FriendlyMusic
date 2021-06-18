import {
    Conductor,
    Contrabass,
    Dj,
    Drummer,
    ElectricGuitarBass,
    ElectricGuitarRitm,
    ElectricGuitarSolo,
    GuitarClassic,
    MusicTeacher,
    Piano,
    Singer,
    Violin,
    Violinist,
    TypeMusician,
} from './MusiciansTypes';

export abstract class Creator {
    abstract factoryCreate(count: number, profession: string): TypeMusician;

    create(count: number, profession: string) {
        return this.factoryCreate(count, profession);
    }
}

export class ConductorCreator extends Creator {
    factoryCreate(count: number, profession: string): TypeMusician {
        return new Conductor(count, profession);
    }
}
export class ContrabassCreator extends Creator {
    factoryCreate(count: number, profession: string): TypeMusician {
        return new Contrabass(count, profession);
    }
}
export class DjCreator extends Creator {
    factoryCreate(count: number, profession: string): TypeMusician {
        return new Dj(count, profession);
    }
}
export class DrummerCreator extends Creator {
    factoryCreate(count: number, profession: string): TypeMusician {
        return new Drummer(count, profession);
    }
}
export class ElectricGuitarBassCreator extends Creator {
    factoryCreate(count: number, profession: string): TypeMusician {
        return new ElectricGuitarBass(count, profession);
    }
}
export class ElectricGuitarRitmCreator extends Creator {
    factoryCreate(count: number, profession: string): TypeMusician {
        return new ElectricGuitarRitm(count, profession);
    }
}
export class ElectricGuitarSoloCreator extends Creator {
    factoryCreate(count: number, profession: string): TypeMusician {
        return new ElectricGuitarSolo(count, profession);
    }
}
export class GuitarClassicCreator extends Creator {
    factoryCreate(count: number, profession: string): TypeMusician {
        return new GuitarClassic(count, profession);
    }
}
export class MusicTeacherCreator extends Creator {
    factoryCreate(count: number, profession: string): TypeMusician {
        return new MusicTeacher(count, profession);
    }
}
export class PianoCreator extends Creator {
    factoryCreate(count: number, profession: string): TypeMusician {
        return new Piano(count, profession);
    }
}
export class SingerCreator extends Creator {
    factoryCreate(count: number, profession: string): TypeMusician {
        return new Singer(count, profession);
    }
}
export class ViolinCreator extends Creator {
    factoryCreate(count: number, profession: string): TypeMusician {
        return new Violin(count, profession);
    }
}
export class ViolinistCreator extends Creator {
    factoryCreate(count: number, profession: string): TypeMusician {
        return new Violinist(count, profession);
    }
}
