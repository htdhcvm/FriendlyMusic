import { Dispatch } from 'redux';
import { GroupActionTypes, GroupActions } from './actionDescription';
import { Visitor } from '../../axios/axios-configuration';
import DTOGroup from '../../DTO/group/Group';
import { createSocials } from '../../factoryComponents/Socials/Socials';

export const getGroupOnId = (id: string) => {
    return async (dispatch: Dispatch<GroupActions>) => {
        const response = await Visitor.get(`/group/getCurrentGroup/${id}`);
        const group: DTOGroup = response.data;

        if (group && group.socialList) {
            group.socialList = createSocials(group.socialList);
        }

        dispatch({
            type: GroupActionTypes.GetGroupOnId,
            payload: group,
        });
    };
};
export const clearGroupDate = () => {
    return async (dispatch: Dispatch<GroupActions>) => {
        dispatch({
            type: GroupActionTypes.ClearGroupDate,
        });
    };
};
