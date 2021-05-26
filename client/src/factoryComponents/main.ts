import { FunctionComponent } from 'react';

import Header from '../components/elements/Header/Header';
import AuthHeader from '../components/elements/AuthHeader/AuthHeader';
import LeftPanel from '../components/elements/LeftPanel/LeftPanel';
import MainContent from '../components/elements/MainContent/MainContent';
import AuthMainContent from '../components/elements/AuthMainContent/AuthMainContent';

interface Builder {
    setHeader(builder: BuilderHeader): void;
    setContent(builder: BuilderContent): void;
    setLeftPanel(builder: LeftPanelBuilder): void;
}

export class MainPageBuilder implements Builder {
    private header!: BuilderHeader;
    private content!: BuilderContent;
    private leftPanel!: LeftPanelBuilder;

    setHeader(component: BuilderHeader): void {
        this.header = component;
    }
    setContent(component: BuilderContent): void {
        this.content = component;
    }
    setLeftPanel(component: LeftPanelBuilder): void {
        this.leftPanel = component;
    }

    getResult(): Page {
        if (this.leftPanel) {
            return new Page(
                this.header.getComponent(),
                this.content.getComponent(),
                this.leftPanel.getComponent()
            );
        }

        return new Page(
            this.header.getComponent(),
            this.content.getComponent()
        );
    }
}

class Page {
    public Header: FunctionComponent;
    public Content: FunctionComponent;
    public LeftPanel?: FunctionComponent;

    constructor(
        Header: FunctionComponent,
        Content: FunctionComponent,
        LeftPanel?: FunctionComponent
    ) {
        this.Header = Header;
        this.Content = Content;
        this.LeftPanel = LeftPanel;
    }
}

interface ComponentBuilder {
    getComponent(): FunctionComponent;
}

interface BuilderHeader extends ComponentBuilder {}
interface BuilderContent extends ComponentBuilder {}

class HeaderBuilder implements BuilderHeader {
    private component: FunctionComponent;

    constructor(component: FunctionComponent) {
        this.component = component;
    }
    getComponent(): FunctionComponent {
        return this.component;
    }
}
class ContentBuilder implements BuilderContent {
    private component: FunctionComponent;

    constructor(component: FunctionComponent) {
        this.component = component;
    }
    getComponent(): FunctionComponent {
        return this.component;
    }
}
class AuthHeaderBuilder implements BuilderHeader {
    private component: FunctionComponent;

    constructor(component: FunctionComponent) {
        this.component = component;
    }
    getComponent(): FunctionComponent {
        return this.component;
    }
}
class AuthContentBuilder implements BuilderContent {
    private component: FunctionComponent;

    constructor(component: FunctionComponent) {
        this.component = component;
    }
    getComponent(): FunctionComponent {
        return this.component;
    }
}

class LeftPanelBuilder implements ComponentBuilder {
    private component: FunctionComponent;

    constructor(component: FunctionComponent) {
        this.component = component;
    }
    getComponent(): FunctionComponent {
        return this.component;
    }
}

export class Director {
    constructAuth(builder: Builder) {
        builder.setContent(new AuthContentBuilder(AuthMainContent));
        builder.setHeader(new AuthHeaderBuilder(AuthHeader));
        builder.setLeftPanel(new LeftPanelBuilder(LeftPanel));
    }
    constructNotAuth(builder: Builder) {
        builder.setContent(new ContentBuilder(MainContent));
        builder.setHeader(new HeaderBuilder(Header));
    }
}
