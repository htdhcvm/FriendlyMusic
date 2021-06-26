import React from 'react';

import './AuthMainContentUser.scss';

import CarouselContainer from '../CarouselContainer/CarouselContainer';
import ListVacancy from '../ListVacancy/ListVacancy';

import { useTypedSelector } from '../../../hooks/useTypedSelector';

const AuthMainContentUser = () => {
    const { toggle } = useTypedSelector((state) => state.ui);

    return (
        <div
            className={`AuthMainContentUser ${
                toggle ? 'close-menu-resize-main' : ''
            }`}
        >
            <CarouselContainer />
            <ListVacancy />
        </div>
    );
};

export default AuthMainContentUser;
