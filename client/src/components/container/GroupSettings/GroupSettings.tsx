import { useTypedSelector } from '@Hooks/useTypedSelector';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { useParams } from 'react-router';
import { useState } from 'react';
import ComponentWithLeftMenu from '@Types/component/ComponentWithLeftMenu';

import SettingTabGroupProfile from '@Container/SettingTabGroupProfile/SettingTabGroupProfile';
import SettingTabGroupVideo from '@Container/SettingTabGroupVideo/SettingTabGroupVideo';
import SettingTabGroupPhoto from '@Container/SettingTabGroupPhoto/SettingTabGroupPhoto';
import SettingTabGroupMembersGroup from '@Container/SettingTabGroupMembersGroup/SettingTabGroupMembersGroup';
import SettingTabGroupCreation from '@Container/SettingTabGroupCreation/SettingTabGroupCreation';

import './GroupSettings.scss';

const GroupSettings = ({ toggleMenuClass }: ComponentWithLeftMenu) => {
    const { tab } = useParams<{ tab: string }>();

    const [value, setValue] = useState<number>(
        tab === 'group' ? 2 : tab === 'media' ? 1 : 0
    );

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };
    return (
        <div className={`settings-element  GroupSettings ${toggleMenuClass}`}>
            <Typography variant='h3' className='title'>
                Настройки
            </Typography>

            <Tabs
                className='header-tabs'
                value={value}
                onChange={handleChange}
                aria-label='simple tabs example'
            >
                <Tab label='Профиль' />
                <Tab label='Видео' />
                <Tab label='Фото' />
                <Tab label='Участники группы' />
                <Tab label='Творчество' />
            </Tabs>
            <SettingTabGroupProfile value={value} index={0} />
            <SettingTabGroupVideo value={value} index={1} />
            <SettingTabGroupPhoto value={value} index={2} />
            <SettingTabGroupMembersGroup value={value} index={3} />
            <SettingTabGroupCreation value={value} index={4} />
        </div>
    );
};

export default GroupSettings;
