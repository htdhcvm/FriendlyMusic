import { FunctionComponent } from 'react';
import './Vacancy.scss';

import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useAction } from '../../../hooks/useAction';
import { useParams } from 'react-router';
import UserStatus from '../../../types/UserStatus';
import generatePageElements from '../../../factoryComponents/Builder/GeneratePage';

import pageWithData from '../../hoc/pageWithData';

const Vacancy = () => {
    let { vacancyId } = useParams<{ vacancyId: string }>();

    const status: UserStatus = useTypedSelector((state) => state.user.status);

    const { Header, Content, LeftPanel } = generatePageElements(
        'Vacancy',
        status
    );

    const { getVacancyOnId, clearCurrentVacancyData } = useAction();

    const ContentWithData = pageWithData({
        Component: Content,
        loadData: getVacancyOnId,
        clearDate: clearCurrentVacancyData,
        id: vacancyId,
    });

    return (
        <div className="Vacancy">
            {Header ? <Header /> : null}
            {LeftPanel ? <LeftPanel /> : null}
            {ContentWithData ? <ContentWithData /> : null}
        </div>
    );
};

export default Vacancy;
