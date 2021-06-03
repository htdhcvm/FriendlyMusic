import React from 'react';

import './UserSettings.scss';

import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TabUserProfile from '../TabUserProfile/TabUserProfile';
import TabUserGroup from '../TabUserGroup/TabUserGroup';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';

const UserSettings = () => {
    const { toggle } = useTypedSelector((state) => state.ui);

    const [value, setValue] = React.useState(0);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    return (
        <div
            className={`settings-element UserSettings ${
                toggle ? 'close-menu-resize-main' : ''
            }`}
        >
            <Typography className="title-settings" variant="h3">
                Настройки
            </Typography>
            <Tabs
                className="header-tabs"
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
            >
                <Tab label="Профиль" />
                <Tab label="Группа" />
                <Tab
                    component={Link}
                    className="create-group"
                    to="/open-collective"
                    label="Создать группу"
                    icon={<AddIcon />}
                />
            </Tabs>
            <TabUserProfile value={value} index={0} />
            <TabUserGroup value={value} index={1} />
        </div>
    );
};

export default UserSettings;
