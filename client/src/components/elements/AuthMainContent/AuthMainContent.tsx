import React from 'react';

import './AuthMainContent.scss';

import CarouselContainer from '../../elements/CarouselContainer/CarouselContainer';
import ListVacancy from '../../elements/ListVacancy/ListVacancy';

import { useTypedSelector } from '../../../hooks/useTypedSelector';

const AuthMainContent = () => {
    const { toggle } = useTypedSelector((state) => state.ui);

    return (
        <div
            className={`AuthMainContent ${
                toggle ? 'close-menu-resize-main' : ''
            }`}
        >
            <CarouselContainer />
            <ListVacancy />
        </div>
    );
};

export default AuthMainContent;
