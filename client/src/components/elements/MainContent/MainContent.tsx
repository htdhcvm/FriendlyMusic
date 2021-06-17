import React from 'react';

import './MainContent.scss';

import CarouselContainer from '../../elements/CarouselContainer/CarouselContainer';
import ListVacancy from '../../elements/ListVacancy/ListVacancy';

import { useTypedSelector } from '../../../hooks/useTypedSelector';

const MainContent = () => {
    return (
        <div className="MainContent">
            <CarouselContainer />
            <ListVacancy />
        </div>
    );
};

export default MainContent;
