import './MainContent.scss';

import CarouselContainer from '@Container/CarouselContainer/CarouselContainer';
import ListVacancy from '@Container/ListVacancy/ListVacancy';

const MainContent = () => {
    return (
        <div className='MainContent'>
            <CarouselContainer />
            <ListVacancy />
        </div>
    );
};

export default MainContent;
