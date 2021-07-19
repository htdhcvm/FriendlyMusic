import './Settings.scss';

import { useTypedSelector } from '@Hooks/useTypedSelector';
import generatePageElements from '@Factory/Builder/GeneratePage';

import UserStatus from '@Types/UserStatus';

const Settings = () => {
    const status: UserStatus = useTypedSelector((state) => state.user.status);

    const { Header, Content, LeftPanel } = generatePageElements(
        'Settings',
        status
    );

    return (
        <div className='Settings'>
            {Header ? <Header /> : null}
            {LeftPanel ? <LeftPanel /> : null}
            {Content ? <Content /> : null}
        </div>
    );
};

export default Settings;
