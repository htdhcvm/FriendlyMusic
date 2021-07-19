import React from 'react';

import './LeftPanel.scss';

import GroupIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import ItemLeftPanel from '@Presentational/ItemLeftPanel/ItemLeftPanel';
import { useTypedSelector } from '@Hooks/useTypedSelector';
import { useAction } from '@Hooks/useAction';
import { Link } from 'react-router-dom';

import WorkIcon from '@material-ui/icons/Work';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PermMediaIcon from '@material-ui/icons/PermMedia';

import { useLocation } from 'react-router-dom';

const LeftPanel = () => {
    const location = useLocation();

    const { toggle } = useTypedSelector((state) => state.ui);
    const { isAuth, status } = useTypedSelector((state) => state.user);

    const { logout } = useAction();

    const handleLogout = () => {
        logout();
    };

    return (
        <div className={`left-panel ${toggle ? 'left-panel-close' : ''}`}>
            <div className='wrapperLogo'>
                <Link to='/main'>
                    <img src='/assets/logo/logoButtom.png' alt='logo' />
                </Link>
            </div>
            <div className='list-item-menu'>
                <ItemLeftPanel
                    Icon={SettingsIcon}
                    text='Настройки'
                    link='/settings'
                    statusActive={
                        location.pathname === '/settings' ? true : false
                    }
                />
                <ItemLeftPanel
                    Icon={GroupIcon}
                    text='Группа'
                    link='/settings/group'
                    statusActive={
                        location.pathname === '/settings/group' ? true : false
                    }
                />

                <ItemLeftPanel
                    Icon={PermMediaIcon}
                    text='Медиа'
                    link='/settings/media'
                    statusActive={
                        location.pathname === '/settings/media' ? true : false
                    }
                />

                {isAuth && status === 'user' ? (
                    <ItemLeftPanel
                        Icon={GroupAddIcon}
                        text='Создать группу'
                        link='/user/createGroup'
                    />
                ) : null}
                {isAuth && status === 'user' ? (
                    <ItemLeftPanel
                        Icon={AssignmentIndIcon}
                        text='Резюме'
                        link='/user/createResume'
                        statusActive={
                            location.pathname === '/user/createResume'
                                ? true
                                : false
                        }
                    />
                ) : null}
                {isAuth && status === 'group' ? (
                    <ItemLeftPanel
                        Icon={WorkIcon}
                        text='Вакансия'
                        link='/group/createVacancy'
                        statusActive={
                            location.pathname === '/group/createVacancy'
                                ? true
                                : false
                        }
                    />
                ) : null}

                <ItemLeftPanel
                    Icon={ExitToAppIcon}
                    text='Выход'
                    action={handleLogout}
                />
            </div>
        </div>
    );
};

export default LeftPanel;
