import React, { useEffect } from 'react';

import './CarouselContainer.scss';

import ItemCountOnTypeMusician from '../ItemCountOnTypeMusician/ItemCountOnTypeMusician';
import { useAction } from '../../../hooks/useAction';

import { useTypedSelector } from '../../../hooks/useTypedSelector';

const CarouselContainer = () => {
    const { getCountOnTypeVacancy } = useAction();

    const listVacanciesOnType = useTypedSelector(
        (state) => state.vacancy.listVacanciesOnType
    );

    useEffect(() => {
        getCountOnTypeVacancy();
    }, []);

    return (
        <>
            <div className="CarouselContainer">
                {listVacanciesOnType.map((vacancyType) => (
                    <ItemCountOnTypeMusician
                        key={vacancyType.type}
                        image={vacancyType.image}
                        count={vacancyType.count}
                    />
                ))}
            </div>
        </>
    );
};

export default CarouselContainer;
