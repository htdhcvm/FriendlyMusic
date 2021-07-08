import { Reducer } from 'redux';

import { GroupActions, GroupActionTypes } from './actionDescription';
import Group from '../../types/Group';

interface IState {
    currentGroup: Group;
}

const initialState: IState = {
    currentGroup: {
        name: '',
        description: '',
        experience: '',
        typeGroup: '',
        email: '',
        musicalGenre: [],
        existRepetitionBase: false,
        commerceProject: false,
        listParticipantsGroup: [],
        address: '',
        telephone: '',
        socialList: [],
        listVideos: [],
        avatar: '',
        photos: [],
        latlon: [],
    },
};

const groupSlice: Reducer<IState, GroupActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case GroupActionTypes.GetGroupOnId:
            return {
                ...state,
                currentGroup: action.payload,
            };
        case GroupActionTypes.ClearGroupDate: {
            return {
                ...state,
                currentGroup: {
                    name: '',
                    description: '',
                    experience: '',
                    typeGroup: '',
                    email: '',
                    musicalGenre: [],
                    existRepetitionBase: false,
                    commerceProject: false,
                    listParticipantsGroup: [],
                    address: '',
                    telephone: '',
                    socialList: [],
                    listVideos: [],
                    avatar: '',
                    photos: [],
                    latlon: [],
                },
            };
        }
        default:
            return { ...state };
    }
};

export default groupSlice;
