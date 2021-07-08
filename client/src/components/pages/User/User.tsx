import './User.scss';

import AuthHeader from '../../elements/AuthHeader/AuthHeader';
import LeftPanel from '../../elements/LeftPanel/LeftPanel';
import UserContent from '../../elements/UserContent/UserContent';

import withToggleMenu from '../../hoc/withToggleMenu';
import withUserData from '../../hoc/withUserData';

const User = () => {
    const Content = withUserData({
        Component: withToggleMenu({ Component: UserContent }),
    });

    return (
        <div className="User">
            <AuthHeader />
            <LeftPanel />
            <Content />
        </div>
    );
};

export default User;
