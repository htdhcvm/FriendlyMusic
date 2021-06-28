import UserStatus from '../../types/UserStatus';
import PageList from '../../types/PageList';

import { Director } from './Director';

import {
    Builder,
    BuilderMainPage,
    BuilderSettingsPage,
    BuilderVacancyPage,
    BuilderGroupPage,
} from './Builder';

import { Page } from './Page';

const generatePageElements = (page: PageList, typeUser: UserStatus): Page => {
    const director: Director = new Director();
    let pageBuilder: Builder | undefined;

    if (typeUser === 'user') {
        switch (page) {
            case 'Main':
                pageBuilder = new BuilderMainPage();
                director.constructMainUser(pageBuilder);
                break;
            case 'Settings':
                pageBuilder = new BuilderSettingsPage();
                director.constructSettingsUser(pageBuilder);
                break;
            case 'Vacancy':
                pageBuilder = new BuilderVacancyPage();
                director.constructVacancyViewUser(pageBuilder);
                break;
            case 'Group':
                pageBuilder = new BuilderGroupPage();
                director.constructGroupPageViewUser(pageBuilder);
                break;
        }
    }

    if (typeUser === 'group') {
        switch (page) {
            case 'Main':
                pageBuilder = new BuilderMainPage();
                director.constructMainGroup(pageBuilder);
                break;
            case 'Settings':
                pageBuilder = new BuilderSettingsPage();
                director.constructSettingsGroup(pageBuilder);
                break;
        }
    }

    if (typeUser === 'visitor') {
        switch (page) {
            case 'Main':
                pageBuilder = new BuilderMainPage();
                director.constructMain(pageBuilder);
                break;
            case 'Vacancy':
                pageBuilder = new BuilderVacancyPage();
                director.constructVacancyView(pageBuilder);
                break;
            case 'Group':
                pageBuilder = new BuilderGroupPage();
                director.constructGroupPageView(pageBuilder);
                break;
        }
    }

    return (pageBuilder as Builder).generatePage();
};

export default generatePageElements;
