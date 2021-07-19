import './User.scss';

import AuthHeader from '../../container/AuthHeader/AuthHeader';
import LeftPanel from '../../container/LeftPanel/LeftPanel';
import UserContent from '../../container/UserContent/UserContent';

import withToggleMenu from '../../hoc/withToggleMenu';
import withUserData from '../../hoc/withUserData';

const User = () => {
    const Content = withUserData({
        Component: withToggleMenu({ Component: UserContent }),
    });

    return (
        <div className='User'>
            <AuthHeader />
            <LeftPanel />
            <Content />
        </div>
    );
};

export default User;
