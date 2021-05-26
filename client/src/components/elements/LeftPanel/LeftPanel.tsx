import React from 'react';

import './LeftPanel.scss';

import GroupIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import logo from '../../../assets/logo/logoButtom.png';

import ItemLeftPanel from '../../elements/ItemLeftPanel/ItemLeftPanel';

const LeftPanel = () => {
    const handleLogout = () => {
        console.log('logout');
    };
    return (
        <div className="left-panel">
            <div className="wrapperLogo">
                <img src={logo} alt="logo" />
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
