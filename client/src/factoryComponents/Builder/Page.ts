import { FunctionComponent } from 'react';

export interface Page {
    Header: FunctionComponent;
    Content: FunctionComponent;
    LeftPanel: FunctionComponent;
}

export class MainPage implements Page {
    Header: FunctionComponent;
    Content: FunctionComponent;
    LeftPanel: FunctionComponent;

    constructor(
        Header: FunctionComponent,
        Content: FunctionComponent,
        LeftPanel: FunctionComponent
    ) {
        this.Header = Header;
        this.Content = Content;
        this.LeftPanel = LeftPanel;
    }
}
export class SettingsPage implements Page {
    Header: FunctionComponent;
    Content: FunctionComponent;
    LeftPanel: FunctionComponent;
    constructor(
        Header: FunctionComponent,
        Content: FunctionComponent,
        LeftPanel: FunctionComponent
    ) {
        this.Header = Header;
        this.Content = Content;
        this.LeftPanel = LeftPanel;
    }
}
export class VacancyPage implements Page {
    Header: FunctionComponent;
    Content: FunctionComponent;
    LeftPanel: FunctionComponent;

    constructor(
        Header: FunctionComponent,
        Content: FunctionComponent,
        LeftPanel: FunctionComponent
    ) {
        this.Header = Header;
        this.Content = Content;
        this.LeftPanel = LeftPanel;
    }
}

export class GroupPage implements Page {
    Header: FunctionComponent;
    Content: FunctionComponent;
    LeftPanel: FunctionComponent;

    constructor(
        Header: FunctionComponent,
        Content: FunctionComponent,
        LeftPanel: FunctionComponent
    ) {
        this.Header = Header;
        this.Content = Content;
        this.LeftPanel = LeftPanel;
    }
}
