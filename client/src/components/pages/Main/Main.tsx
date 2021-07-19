import './Main.scss';

import { useTypedSelector } from '@Hooks/useTypedSelector';
import generatePageElements from '@Factory/Builder/GeneratePage';
import UserStatus from '@Types/UserStatus';

import { memo } from 'react';

const Main = () => {
    const status: UserStatus = useTypedSelector((state) => state.user.status);

    const { Header, Content, LeftPanel } = generatePageElements('Main', status);

    return (
        <div className='Main'>
            {Header ? <Header /> : null}
            {Content ? <Content /> : null}
            {LeftPanel ? <LeftPanel /> : null}
        </div>
    );
};

export default memo(Main);
