import { FunctionComponent } from 'react';

import UserSettings from '../components/elements/settings/UserSettings/UserSettings';
import GroupSettings from '../components/elements/settings/GroupSettings/GroupSettings';

abstract class Settings {
    abstract factoryCreate(): FunctionComponent;

    create(): FunctionComponent {
        return this.factoryCreate();
    }
}

export class UserSettingsFactory extends Settings {
    factoryCreate(): FunctionComponent {
        return UserSettings;
    }
}

export class GroupSettingsFactory extends Settings {
    factoryCreate(): FunctionComponent {
        return GroupSettings;
    }
}

export const createSettingsPanel = (pageSettings: Settings) => {
    return pageSettings.create();
};
