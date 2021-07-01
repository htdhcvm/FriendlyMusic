import Resume from '../../types/Resume';
import ResumeItemList from '../../types/ResumeItemList';

export enum ResumesActionTypes {
    GetListResumes = 'Resumes/GetListResumes',
    GetResumeOnId = 'Resumes/GetResumeOnId',
    ClearResumeDate = 'Resumes/ClearResumeDate',
}

interface Action {
    type: string;
    payload?: string | Array<ResumeItemList> | Resume;
}

interface GetListResumes extends Action {
    type: ResumesActionTypes.GetListResumes;
    payload: Array<ResumeItemList>;
}

interface GetResumeOnId extends Action {
    type: ResumesActionTypes.GetResumeOnId;
    payload: Resume;
}

interface ClearResumeDate extends Action {
    type: ResumesActionTypes.ClearResumeDate;
}

export type ResumesActions = GetListResumes | GetResumeOnId | ClearResumeDate;
