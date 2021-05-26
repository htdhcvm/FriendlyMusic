export enum UiActionTypes {
    OPENMENU = 'UI/OPENMENU',
    CLOSEMENU = 'UI/CLOSEMENU',
}

interface OpenAction {
    type: UiActionTypes.OPENMENU;
    payload: Boolean;
}

interface CloseAction {
    type: UiActionTypes.CLOSEMENU;
    payload: Boolean;
}

export type UiAction = OpenAction | CloseAction;
