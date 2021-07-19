import './AuthMainContentUser.scss';

import CarouselContainer from '@Container/CarouselContainer/CarouselContainer';
import ListVacancy from '@Container/ListVacancy/ListVacancy';

import ComponentWithLeftMenu from '@Types/component/ComponentWithLeftMenu';

const AuthMainContentUser = ({ toggleMenuClass }: ComponentWithLeftMenu) => {
    return (
        <div className={`AuthMainContentUser ${toggleMenuClass}`}>
            <CarouselContainer />
            <ListVacancy />
        </div>
    );
};

export default AuthMainContentUser;
