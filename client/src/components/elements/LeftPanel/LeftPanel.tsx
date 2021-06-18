import React from 'react';

import './LeftPanel.scss';

import GroupIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import ItemLeftPanel from '../ItemLeftPanel/ItemLeftPanel';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useAction } from '../../../hooks/useAction';
import { Link } from 'react-router-dom';

const LeftPanel = () => {
    const { toggle } = useTypedSelector((state) => state.ui);

    const { logout } = useAction();

    const handleLogout = () => {
        logout();
    };

    return (
        <div className={`left-panel ${toggle ? 'left-panel-close' : ''}`}>
            <div className="wrapperLogo">
                <Link to="/main">
                    <img src="./assets/logo/logoButtom.png" alt="logo" />
                </Link>
            </div>
            <div className="list-item-menu">
                <ItemLeftPanel
                    Icon={SettingsIcon}
                    text="Настройки"
                    link="/settings"
                />
                <ItemLeftPanel
                    Icon={GroupIcon}
                    text="Группа"
                    link="/settings"
                />
                <ItemLeftPanel
                    Icon={ExitToAppIcon}
                    text="Выход"
                    action={handleLogout}
                />
            </div>
        </div>
    );
};

export default LeftPanel;
