import React from 'react';

import './MainContent.scss';

import CarouselContainer from '../../elements/CarouselContainer/CarouselContainer';
import ListVacancy from '../../elements/ListVacancy/ListVacancy';

const MainContent = () => {
    return (
        <div className="MainContent">
            <CarouselContainer />
            <ListVacancy />
        </div>
    );
};

export default MainContent;
