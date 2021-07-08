import Group from '../../types/Group';

export enum GroupActionTypes {
    GetGroupOnId = 'Group/GetGroupOnId',
    ClearGroupDate = 'Group/ClearGroupDate',
}

interface Action {
    type: string;
    payload?: string | Group;
}

interface GetGroupOnId extends Action {
    type: GroupActionTypes.GetGroupOnId;
    payload: Group;
}

interface ClearGroupDate extends Action {
    type: GroupActionTypes.ClearGroupDate;
}

export type GroupActions = GetGroupOnId | ClearGroupDate;
