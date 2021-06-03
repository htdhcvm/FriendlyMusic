import React from 'react';

import './CarouselContainer.scss';

import ItemCountOnTypeMusician from '../ItemCountOnTypeMusician/ItemCountOnTypeMusician';

import conductor from '../../../assets/onTypeMusician/conductor.png';
import contrabass from '../../../assets/onTypeMusician/contrabass.png';
import dj from '../../../assets/onTypeMusician/dj.png';
import drummer from '../../../assets/onTypeMusician/drummer.png';
import electricGuitarBass from '../../../assets/onTypeMusician/electric-guitarBass.png';
import electricGuitarRitm from '../../../assets/onTypeMusician/electric-guitarRitm.png';
import electricGuitarSolo from '../../../assets/onTypeMusician/electric-guitarSolo.png';
import guitarClassic from '../../../assets/onTypeMusician/guitarClassic.png';
import musicTeacher from '../../../assets/onTypeMusician/music-teacher.png';
import piano from '../../../assets/onTypeMusician/piano.png';
import singer from '../../../assets/onTypeMusician/singer.png';
import violin from '../../../assets/onTypeMusician/violin.png';
import violinist from '../../../assets/onTypeMusician/violinist.png';
import violoncello from '../../../assets/onTypeMusician/violoncello.png';

const CarouselContainer = () => {
    return (
        <>
            <div className="CarouselContainer">
                <ItemCountOnTypeMusician
                    image={conductor}
                    text="Дирижеров"
                    count={2}
                />
                <ItemCountOnTypeMusician
                    image={contrabass}
                    text="Контрабасистов"
                    count={7}
                />
                <ItemCountOnTypeMusician image={dj} text="Диджеев" count={4} />
                <ItemCountOnTypeMusician
                    image={drummer}
                    text="Барабнщиков"
                    count={4}
                />
                <ItemCountOnTypeMusician
                    image={electricGuitarBass}
                    text="Басистов"
                    count={11}
                />
                <ItemCountOnTypeMusician
                    image={electricGuitarRitm}
                    text="Ритм гитаристов"
                    count={7}
                />
                <ItemCountOnTypeMusician
                    image={electricGuitarSolo}
                    text="Соло гитаристов"
                    count={4}
                />
                <ItemCountOnTypeMusician
                    image={guitarClassic}
                    text="Классических гитаристов"
                    count={4}
                />
                <ItemCountOnTypeMusician
                    image={musicTeacher}
                    text="Учителей музыки"
                    count={6}
                />
                <ItemCountOnTypeMusician
                    image={piano}
                    text="Пианистов"
                    count={2}
                />
                <ItemCountOnTypeMusician
                    image={singer}
                    text="Певцов"
                    count={1}
                />
                <ItemCountOnTypeMusician
                    image={violin}
                    text="Скрипачей"
                    count={6}
                />
                <ItemCountOnTypeMusician
                    image={violinist}
                    text="Виолончелистов"
                    count={2}
                />
                <ItemCountOnTypeMusician
                    image={violoncello}
                    text="Виолончелистов"
                    count={1}
                />
            </div>
        </>
    );
};

export default CarouselContainer;
