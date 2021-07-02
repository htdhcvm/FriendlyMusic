import React, { useEffect } from 'react';
import { useAction } from '../../../hooks/useAction';
import { useParams } from 'react-router-dom';

import AuthHeader from '../../elements/AuthHeader/AuthHeader';
import LeftPanel from '../../elements/LeftPanel/LeftPanel';
import withToggleMenu from '../../hoc/withToggleMenu';
import UserContent from '../../elements/UserContent/UserContent';
import withUserData from '../../hoc/withUserData';

import './User.scss';

const User = () => {
    let { idUser } = useParams<{ idUser: string }>();
    const { getCurrentUser } = useAction();

    const Content = withUserData({
        Component: withToggleMenu({ Component: UserContent }),
    });

    useEffect(() => {
        getCurrentUser(idUser);
    }, []);

    return (
        <div className="User">
            <AuthHeader />
            <LeftPanel />
            <Content />
            {/* <h1>User</h1> */}
            {/* <div dangerouslySetInnerHTML={{ __html: test }}></div> */}
        </div>
    );
};

export default User;
