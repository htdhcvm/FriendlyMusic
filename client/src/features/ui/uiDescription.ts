export enum UiActionTypes {
    OPENMENU = 'UI/OPENMENU',
    CLOSEMENU = 'UI/CLOSEMENU',
}

interface OpenAction {
    type: UiActionTypes.OPENMENU;
    payload: boolean;
}

interface CloseAction {
    type: UiActionTypes.CLOSEMENU;
    payload: boolean;
}

export type UiAction = OpenAction | CloseAction;
