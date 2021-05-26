import React from 'react';

import './Settings.scss';

import {
    UserSettingsFactory,
    GroupSettingsFactory,
    createSettingsPanel,
} from '../../../factoryComponents/settings';

const Settings = () => {
    const typeUser: String = 'group';

    const SettingComponent =
        typeUser === 'group'
            ? createSettingsPanel(new UserSettingsFactory())
            : createSettingsPanel(new GroupSettingsFactory());

    console.log(SettingComponent);
    return (
        <div>
            <h1>Settings</h1>
            <SettingComponent />
        </div>
    );
};

export default Settings;
