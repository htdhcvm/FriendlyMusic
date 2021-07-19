import './Group.scss';

import { useTypedSelector } from '../../../hooks/useTypedSelector';
import generatePageElements from '../../../factoryComponents/Builder/GeneratePage';

import UserStatus from '../../../types/UserStatus';
import { memo } from 'react';

const Group = () => {
    const status: UserStatus = useTypedSelector((state) => state.user.status);

    const { Header, Content, LeftPanel } = generatePageElements(
        'Group',
        status
    );

    return (
        <div className='Group'>
            {Header ? <Header /> : null}
            {Content ? <Content /> : null}
            {LeftPanel ? <LeftPanel /> : null}
        </div>
    );
};

export default memo(Group);
