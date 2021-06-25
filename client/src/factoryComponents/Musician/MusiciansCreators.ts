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
    abstract factoryCreate(profession: string, count?: number): TypeMusician;

    create(profession: string, count?: number) {
        return this.factoryCreate(profession, count);
    }
}

export class ConductorCreator extends Creator {
    factoryCreate(profession: string, count?: number): TypeMusician {
        return new Conductor(profession, count);
    }
}
export class ContrabassCreator extends Creator {
    factoryCreate(profession: string, count?: number): TypeMusician {
        return new Contrabass(profession, count);
    }
}
export class DjCreator extends Creator {
    factoryCreate(profession: string, count?: number): TypeMusician {
        return new Dj(profession, count);
    }
}
export class DrummerCreator extends Creator {
    factoryCreate(profession: string, count?: number): TypeMusician {
        return new Drummer(profession, count);
    }
}
export class ElectricGuitarBassCreator extends Creator {
    factoryCreate(profession: string, count?: number): TypeMusician {
        return new ElectricGuitarBass(profession, count);
    }
}
export class ElectricGuitarRitmCreator extends Creator {
    factoryCreate(profession: string, count?: number): TypeMusician {
        return new ElectricGuitarRitm(profession, count);
    }
}
export class ElectricGuitarSoloCreator extends Creator {
    factoryCreate(profession: string, count?: number): TypeMusician {
        return new ElectricGuitarSolo(profession, count);
    }
}
export class GuitarClassicCreator extends Creator {
    factoryCreate(profession: string, count?: number): TypeMusician {
        return new GuitarClassic(profession, count);
    }
}
export class MusicTeacherCreator extends Creator {
    factoryCreate(profession: string, count?: number): TypeMusician {
        return new MusicTeacher(profession, count);
    }
}
export class PianoCreator extends Creator {
    factoryCreate(profession: string, count?: number): TypeMusician {
        return new Piano(profession, count);
    }
}
export class SingerCreator extends Creator {
    factoryCreate(profession: string, count?: number): TypeMusician {
        return new Singer(profession, count);
    }
}
export class ViolinCreator extends Creator {
    factoryCreate(profession: string, count?: number): TypeMusician {
        return new Violin(profession, count);
    }
}
export class ViolinistCreator extends Creator {
    factoryCreate(profession: string, count?: number): TypeMusician {
        return new Violinist(profession, count);
    }
}
