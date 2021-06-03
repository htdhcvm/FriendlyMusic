import React from 'react';

import './Settings.scss';

import { PageBuilder, Director } from '../../../factoryComponents/main';

import {
    UserSettingsFactory,
    GroupSettingsFactory,
    createSettingsPanel,
} from '../../../factoryComponents/settings';

const pageBuilderHeaderMenu: PageBuilder = new PageBuilder();
const director: Director = new Director();

const Settings = () => {
    const isAuth: boolean = true;
    const typeUser: String = 'group';

    const SettingComponent =
        typeUser === 'group'
            ? createSettingsPanel(new UserSettingsFactory())
            : createSettingsPanel(new GroupSettingsFactory());

    if (isAuth) director.constructForSettings(pageBuilderHeaderMenu);

    const { Header, LeftPanel } = pageBuilderHeaderMenu.getResult();

    return (
        <div className="Settings">
            {Header ? <Header /> : null}
            {LeftPanel ? <LeftPanel /> : null}
            <SettingComponent />
        </div>
    );
};

export default Settings;
