import React from 'react';

import './AuthMainContent.scss';

import CarouselContainer from '../../elements/CarouselContainer/CarouselContainer';
import ListVacancy from '../../elements/ListVacancy/ListVacancy';

const AuthMainContent = () => {
    return (
        <div className="AuthMainContent">
            <CarouselContainer />
            <ListVacancy />
        </div>
    );
};

export default AuthMainContent;
