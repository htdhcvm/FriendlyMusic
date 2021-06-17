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
    abstract factoryCreate(count: number): TypeMusician;

    create(count: number) {
        return this.factoryCreate(count);
    }
}

export class ConductorCreator extends Creator {
    factoryCreate(count: number): TypeMusician {
        return new Conductor(count);
    }
}
export class ContrabassCreator extends Creator {
    factoryCreate(count: number): TypeMusician {
        return new Contrabass(count);
    }
}
export class DjCreator extends Creator {
    factoryCreate(count: number): TypeMusician {
        return new Dj(count);
    }
}
export class DrummerCreator extends Creator {
    factoryCreate(count: number): TypeMusician {
        return new Drummer(count);
    }
}
export class ElectricGuitarBassCreator extends Creator {
    factoryCreate(count: number): TypeMusician {
        return new ElectricGuitarBass(count);
    }
}
export class ElectricGuitarRitmCreator extends Creator {
    factoryCreate(count: number): TypeMusician {
        return new ElectricGuitarRitm(count);
    }
}
export class ElectricGuitarSoloCreator extends Creator {
    factoryCreate(count: number): TypeMusician {
        return new ElectricGuitarSolo(count);
    }
}
export class GuitarClassicCreator extends Creator {
    factoryCreate(count: number): TypeMusician {
        return new GuitarClassic(count);
    }
}
export class MusicTeacherCreator extends Creator {
    factoryCreate(count: number): TypeMusician {
        return new MusicTeacher(count);
    }
}
export class PianoCreator extends Creator {
    factoryCreate(count: number): TypeMusician {
        return new Piano(count);
    }
}
export class SingerCreator extends Creator {
    factoryCreate(count: number): TypeMusician {
        return new Singer(count);
    }
}
export class ViolinCreator extends Creator {
    factoryCreate(count: number): TypeMusician {
        return new Violin(count);
    }
}
export class ViolinistCreator extends Creator {
    factoryCreate(count: number): TypeMusician {
        return new Violinist(count);
    }
}
