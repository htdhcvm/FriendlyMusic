import { Typography } from '@material-ui/core';
import { memo } from 'react';
import { Institution } from '../../../types/Resume';

import './EducationList.scss';

interface EducationListProp {
    educations: Array<Institution> | undefined;
}

const EducationList = ({ educations }: EducationListProp) => {
    return (
        <div className='EducationList item-resume'>
            <Typography variant='h4' className='sub-title'>
                Образование
            </Typography>
            <div className='list'>
                {educations
                    ? educations.map((education) => (
                          <div className='item' key={education.name}>
                              <span className='time'>
                                  {education.timeEducation.start.substr(0, 4)}-
                                  {education.timeEducation.end.substr(0, 4)}
                              </span>
                              <span className='name'>
                                  {education.nameFaculty}
                              </span>

                              <span>{education.qualification}</span>
                          </div>
                      ))
                    : null}
            </div>
        </div>
    );
};

export default memo(EducationList);
