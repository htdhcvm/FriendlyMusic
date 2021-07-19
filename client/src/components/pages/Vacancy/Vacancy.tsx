import { FunctionComponent } from 'react';

import './Vacancy.scss';

import { useTypedSelector } from '@Hooks/useTypedSelector';
import UserStatus from '@Types/UserStatus';
import generatePageElements from '@Factory/Builder/GeneratePage';

import { memo } from 'react';

const Vacancy = () => {
    const status: UserStatus = useTypedSelector((state) => state.user.status);

    const { Header, Content, LeftPanel } = generatePageElements(
        'Vacancy',
        status
    );

    return (
        <div className='Vacancy'>
            {Header ? <Header /> : null}
            {LeftPanel ? <LeftPanel /> : null}
            {Content ? <Content /> : null}
        </div>
    );
};

export default memo(Vacancy);
