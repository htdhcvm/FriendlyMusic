import { Dispatch } from 'redux';
import { ResumesActions, ResumesActionTypes } from './actionDescription';

import { Group } from '../../axios/axios-configuration';
import DTOResumesList from '../../DTO/group/ResumesList';
import DTOResume from '../../DTO/group/Resume';
import { createSocials } from '../../factoryComponents/Socials/Socials';

export const getListResumes = () => {
    return async (dispatch: Dispatch<ResumesActions>) => {
        const response = await Group.get('/getListResumes');

        const listResumes: DTOResumesList = response.data;

        dispatch({
            type: ResumesActionTypes.GetListResumes,
            payload: listResumes,
        });
    };
};

export const getResumeOnId = (id: string) => {
    return async (dispatch: Dispatch<ResumesActions>) => {
        const response = await Group.get(`/getResume/${id}`);

        const resume: DTOResume = response.data;

        if (resume.socialList) {
            resume.socialList = createSocials(resume.socialList);
        }

        dispatch({
            type: ResumesActionTypes.GetResumeOnId,
            payload: resume,
        });
    };
};

export const clearResumeData = () => {
    return async (dispatch: Dispatch<ResumesActions>) => {
        dispatch({
            type: ResumesActionTypes.ClearResumeDate,
        });
    };
};
