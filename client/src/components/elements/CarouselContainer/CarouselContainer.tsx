import React, { useEffect } from 'react';

import './CarouselContainer.scss';

import ItemCountOnTypeMusician from '../ItemCountOnTypeMusician/ItemCountOnTypeMusician';
import { useAction } from '../../../hooks/useAction';

import { useTypedSelector } from '../../../hooks/useTypedSelector';
import VacancyOnCategory from '../../../types/VacancyOnCategory';

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
                {listVacanciesOnType.map((vacancyType: VacancyOnCategory) => (
                    <ItemCountOnTypeMusician
                        key={vacancyType.type}
                        title={vacancyType.profession}
                        image={vacancyType.image}
                        count={vacancyType.count}
                    />
                ))}
            </div>
        </>
    );
};

export default CarouselContainer;
