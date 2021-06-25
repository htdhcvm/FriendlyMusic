import { Dispatch } from 'redux';
import { UiAction, UiActionTypes } from './uiDescription';

export const closeMenu = (dispatch: Dispatch<UiAction>) => {
    dispatch({ type: UiActionTypes.CLOSEMENU, payload: true });
};

export const openMenu = (dispatch: Dispatch<UiAction>) => {
    dispatch({ type: UiActionTypes.CLOSEMENU, payload: false });
};
