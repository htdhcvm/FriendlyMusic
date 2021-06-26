import './Vacancy.scss';

import { useTypedSelector } from '../../../hooks/useTypedSelector';
import generatePageElements from '../../../factoryComponents/Builder/GeneratePage';

import UserStatus from '../../../types/UserStatus';

import withVacancyData from '../../hoc/withVacancyData';
import { FunctionComponent } from 'react';

const Vacancy = () => {
    const status: UserStatus = useTypedSelector((state) => state.user.status);
    let ContentWithData: FunctionComponent | undefined;

    const { Header, Content, LeftPanel } = generatePageElements(
        'Vacancy',
        status
    );

    if (Content) {
        ContentWithData = withVacancyData({ Component: Content });
    }

    console.log(Content);

    return (
        <div className="Vacancy">
            {Header ? <Header /> : null}
            {LeftPanel ? <LeftPanel /> : null}
            {ContentWithData ? <ContentWithData /> : null}
        </div>
    );
};

export default Vacancy;
