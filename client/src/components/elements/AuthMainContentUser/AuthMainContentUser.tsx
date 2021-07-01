import { memo } from 'react';
import './AuthMainContentUser.scss';

import CarouselContainer from '../CarouselContainer/CarouselContainer';
import ListVacancy from '../ListVacancy/ListVacancy';

import ComponentWithLeftMenu from '../../../types/component/ComponentWithLeftMenu';

const AuthMainContentUser = ({ toggleMenuClass }: ComponentWithLeftMenu) => {
    return (
        <div className={`AuthMainContentUser ${toggleMenuClass}`}>
            <CarouselContainer />
            <ListVacancy />
        </div>
    );
};

export default memo(AuthMainContentUser);
