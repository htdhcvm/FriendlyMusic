import './MainContent.scss';

import CarouselContainer from '../CarouselContainer/CarouselContainer';
import ListVacancy from '../../container/ListVacancy/ListVacancy';

const MainContent = () => {
    return (
        <div className='MainContent'>
            <CarouselContainer />
            <ListVacancy />
        </div>
    );
};

export default MainContent;
