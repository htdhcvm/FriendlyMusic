import React, { useEffect } from 'react';

import './CarouselContainer.scss';

import ItemCountOnTypeMusician from '@Presentational/ItemCountOnTypeMusician/ItemCountOnTypeMusician';

import { useAction } from '@Hooks/useAction';
import { useTypedSelector } from '@Hooks/useTypedSelector';
import VacancyOnCategory from '@Types/VacancyOnCategory';

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
            <div className='CarouselContainer'>
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
