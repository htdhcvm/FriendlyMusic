import './User.scss';

import AuthHeader from '@Container/AuthHeader/AuthHeader';
import LeftPanel from '@Container/LeftPanel/LeftPanel';
import UserContent from '@Container/UserContent/UserContent';

import withToggleMenu from '@Hoc/withToggleMenu';
import { memo } from 'react';

const User = () => {
    const Content = withToggleMenu({ Component: UserContent });

    return (
        <div className='User'>
            <AuthHeader />
            <LeftPanel />
            <Content />
        </div>
    );
};

export default memo(User);
