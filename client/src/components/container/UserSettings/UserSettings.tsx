import { useState } from 'react';

import './UserSettings.scss';

import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TabUserProfile from '../TabUserProfile/TabUserProfile';
import TabUserGroup from '../TabUserGroup/TabUserGroup';
import TabUserMedia from '../TabUserMedia/TabUserMedia';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import { useParams } from 'react-router';
import { useEffect } from 'react';

const UserSettings = () => {
    const { tab } = useParams<{ tab: string }>();

    const { toggle } = useTypedSelector((state) => state.ui);

    const [value, setValue] = useState(
        tab === 'group' ? 2 : tab === 'media' ? 1 : 0
    );

    useEffect(() => {
        if (tab === 'group') {
            setValue(2);
        } else if (tab === 'media') {
            setValue(1);
        } else {
            setValue(0);
        }
    }, [tab]);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    return (
        <div
            className={`settings-element UserSettings ${
                toggle ? 'close-menu-resize-main' : ''
            }`}
        >
            <Typography className='title-settings' variant='h3'>
                Настройки
            </Typography>
            <Tabs
                className='header-tabs'
                value={value}
                onChange={handleChange}
                aria-label='simple tabs example'
            >
                <Tab label='Профиль' />
                <Tab label='Медиа' />
                <Tab label='Группа' />
                <Tab
                    component={Link}
                    className='create-group'
                    to='/open-collective'
                    label='Создать группу'
                    icon={<AddIcon />}
                />
            </Tabs>
            <TabUserProfile value={value} index={0} />
            <TabUserMedia value={value} index={1} />
            <TabUserGroup value={value} index={2} />
        </div>
    );
};

export default UserSettings;
