import { FunctionComponent } from 'react';
import MapGoogle from '@Presentational/GoogleMap/GoogleMap';
import ItemContent from '@Presentational/ItemContent/ItemContent';

import './TextVacancy.scss';

interface Props {
    Buttons?: FunctionComponent;
    description: string;
    experience?: string;
    responsibility?: string;
    requirement?: Array<string>;
    offer?: Array<string>;
    quality?: Array<string>;
    willPlus?: Array<string>;
    skills?: Array<string>;
    latlon: Array<number>;
}

const TextVacancy: FunctionComponent<Props> = ({
    Buttons,
    experience,
    description,
    responsibility,
    requirement,
    offer,
    quality,
    skills,
    willPlus,
    latlon,
}) => {
    return (
        <div className='TextVacancy'>
            <div className='wrapper'>
                {Buttons ? <Buttons /> : null}
                <span className='experience'>Требуемый опыт: {experience}</span>
                <ItemContent content={description} title='Описание' />
                <ItemContent content={requirement} title='Требования' />
                <ItemContent content={responsibility} title='Обязанности' />
                <ItemContent content={willPlus} title='Будет преимуществом' />
                <ItemContent content={offer} title='Мы предлагаем' />
                <ItemContent content={quality} title='Качества' />
                <ItemContent content={skills} title='Ключевые навыки' />
                <MapGoogle latlon={latlon} />
            </div>
        </div>
    );
};

export default TextVacancy;
