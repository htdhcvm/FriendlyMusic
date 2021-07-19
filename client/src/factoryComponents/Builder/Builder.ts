import { FunctionComponent, MemoExoticComponent } from 'react';

import Header from '../../components/container/Header/Header';
import AuthHeader from '../../components/container/AuthHeader/AuthHeader';
import LeftPanel from '../../components/container/LeftPanel/LeftPanel';
import MainContent from '../../components/container/MainContent/MainContent';
import VacancyContent from '../../components/container/VacancyContent/VacancyContent';
import AuthVacancyContent from '../../components/container/AuthVacancyContent/AuthVacancyContent';
import AuthMainContentUser from '../../components/container/AuthMainContentUser/AuthMainContentUser';
import AuthMainContentGroup from '../../components/container/AuthMainContentGroup/AuthMainContentGroup';
import GroupPageContent from '../../components/container/GroupContentPage/GroupPageContent';
import GroupPageContentAuth from '../../components/container/GroupPageContentAuth/GroupPageContentAuth';
import UserSettings from '../../components/container/UserSettings/UserSettings';
import GroupSettings from '../../components/container/GroupSettings/GroupSettings';

import withToggleMenu from '../../components/hoc/withToggleMenu';

import { Page, MainPage, SettingsPage, VacancyPage, GroupPage } from './Page';

export interface Builder {
    setHeader(builder: Header): void;
    setContent(builder: Content): void;
    setLeftMenu(builder: LeftMenu): void;

    generatePage(): Page;
}

export class BuilderMainPage implements Builder {
    private header!: Header;
    private content!: Content;
    private leftMenu!: LeftMenu;

    setHeader(builder: Header): void {
        this.header = builder;
    }
    setContent(builder: Content): void {
        this.content = builder;
    }
    setLeftMenu(builder: LeftMenu): void {
        this.leftMenu = builder;
    }

    generatePage(): Page {
        return new MainPage(
            this.header.getComponent(),
            this.content.getComponent(),
            this.leftMenu?.getComponent()
        );
    }
}

export class BuilderSettingsPage implements Builder {
    private header!: Header;
    private content!: Content;
    private leftMenu!: LeftMenu;

    setHeader(builder: Header): void {
        this.header = builder;
    }
    setContent(builder: Content): void {
        this.content = builder;
    }
    setLeftMenu(builder: LeftMenu): void {
        this.leftMenu = builder;
    }

    generatePage(): Page {
        return new SettingsPage(
            this.header.getComponent(),
            this.content.getComponent(),
            this.leftMenu?.getComponent()
        );
    }
}
export class BuilderVacancyPage implements Builder {
    private header!: Header;
    private content!: Content;
    private leftMenu!: LeftMenu;

    setHeader(builder: Header): void {
        this.header = builder;
    }
    setContent(builder: Content): void {
        this.content = builder;
    }
    setLeftMenu(builder: LeftMenu): void {
        this.leftMenu = builder;
    }

    generatePage(): Page {
        return new VacancyPage(
            this.header.getComponent(),
            this.content.getComponent(),
            this.leftMenu?.getComponent()
        );
    }
}
export class BuilderGroupPage implements Builder {
    private header!: Header;
    private content!: Content;
    private leftMenu!: LeftMenu;

    setHeader(builder: Header): void {
        this.header = builder;
    }
    setContent(builder: Content): void {
        this.content = builder;
    }
    setLeftMenu(builder: LeftMenu): void {
        this.leftMenu = builder;
    }

    generatePage(): Page {
        return new GroupPage(
            this.header.getComponent(),
            this.content.getComponent(),
            this.leftMenu?.getComponent()
        );
    }
}

interface ComponentBuilder {
    getComponent(): FunctionComponent;
}

interface Header extends ComponentBuilder {}
interface Content extends ComponentBuilder {}
interface LeftMenu extends ComponentBuilder {}

export class HeaderBuilder implements Header {
    private component: FunctionComponent = Header;

    getComponent(): FunctionComponent {
        return this.component;
    }
}

export class AuthHeaderBuilder implements Header {
    private component: FunctionComponent = AuthHeader;

    getComponent(): FunctionComponent {
        return this.component;
    }
}

export class LeftPanelBuilder implements LeftMenu {
    private component: FunctionComponent = LeftPanel;

    getComponent(): FunctionComponent {
        return this.component;
    }
}

export class MainContentBuilder implements Content {
    private component: FunctionComponent = MainContent;

    getComponent(): FunctionComponent {
        return this.component;
    }
}

export class AuthMainContentUserBuilder implements Content {
    private component: FunctionComponent = withToggleMenu({
        Component: AuthMainContentUser,
    });

    getComponent(): FunctionComponent {
        return this.component;
    }
}

export class AuthMainContentGroupBuilder implements Content {
    private component: FunctionComponent = withToggleMenu({
        Component: AuthMainContentGroup,
    });

    getComponent(): FunctionComponent {
        return this.component;
    }
}

export class VacancyContentBuilder implements Content {
    private component: FunctionComponent = VacancyContent;

    getComponent(): FunctionComponent {
        return this.component;
    }
}

export class AuthVacancyContentBuilder implements Content {
    private component: FunctionComponent = withToggleMenu({
        Component: AuthVacancyContent,
    });

    getComponent(): FunctionComponent {
        return this.component;
    }
}

export class SettingsContentUser implements Content {
    private component: FunctionComponent = UserSettings;

    getComponent(): FunctionComponent {
        return this.component;
    }
}
export class SettingsContentGroup implements Content {
    private component: FunctionComponent = GroupSettings;

    getComponent(): FunctionComponent {
        return this.component;
    }
}

export class GroupPageContentBuilder implements Content {
    private component: FunctionComponent = GroupPageContent;

    getComponent(): FunctionComponent {
        return this.component;
    }
}

export class GroupPageContentAuthBuilder implements Content {
    private component: FunctionComponent = withToggleMenu({
        Component: GroupPageContentAuth,
    });

    getComponent(): FunctionComponent {
        return this.component;
    }
}
