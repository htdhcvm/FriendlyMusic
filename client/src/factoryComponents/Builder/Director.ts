import {
    Builder,
    HeaderBuilder,
    AuthHeaderBuilder,
    LeftPanelBuilder,
    MainContentBuilder,
    AuthMainContentUserBuilder,
    AuthMainContentGroupBuilder,
    VacancyContentBuilder,
    AuthVacancyContentBuilder,
    SettingsContentUser,
    SettingsContentGroup,
    GroupPageContentBuilder,
    GroupPageContentAuthBuilder,
} from './Builder';

export class Director {
    constructMain(builder: Builder) {
        builder.setHeader(new HeaderBuilder());
        builder.setContent(new MainContentBuilder());
    }
    constructMainUser(builder: Builder) {
        builder.setHeader(new AuthHeaderBuilder());
        builder.setContent(new AuthMainContentUserBuilder());
        builder.setLeftMenu(new LeftPanelBuilder());
    }

    constructMainGroup(builder: Builder) {
        builder.setHeader(new AuthHeaderBuilder());
        builder.setContent(new AuthMainContentGroupBuilder());
        builder.setLeftMenu(new LeftPanelBuilder());
    }

    constructSettingsUser(builder: Builder) {
        builder.setHeader(new AuthHeaderBuilder());
        builder.setContent(new SettingsContentUser());
        builder.setLeftMenu(new LeftPanelBuilder());
    }
    constructSettingsGroup(builder: Builder) {
        builder.setHeader(new AuthHeaderBuilder());
        builder.setContent(new SettingsContentGroup());
        builder.setLeftMenu(new LeftPanelBuilder());
    }

    constructVacancyView(builder: Builder) {
        builder.setHeader(new HeaderBuilder());
        builder.setContent(new VacancyContentBuilder());
    }

    constructVacancyViewUser(builder: Builder) {
        builder.setHeader(new AuthHeaderBuilder());
        builder.setContent(new AuthVacancyContentBuilder());
        builder.setLeftMenu(new LeftPanelBuilder());
    }

    constructGroupPageView(builder: Builder) {
        builder.setHeader(new HeaderBuilder());
        builder.setContent(new GroupPageContentBuilder());
    }

    constructGroupPageViewUser(builder: Builder) {
        builder.setHeader(new AuthHeaderBuilder());
        builder.setContent(new GroupPageContentAuthBuilder());
        builder.setLeftMenu(new LeftPanelBuilder());
    }
}
