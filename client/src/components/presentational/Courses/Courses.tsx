import { Typography } from '@material-ui/core';
import { memo } from 'react';
import { Course } from '@Types/Resume';

import './Courses.scss';

interface CoursesProp {
    courses: Array<Course> | undefined;
}

const Courses = ({ courses }: CoursesProp) => {
    return (
        <div className='Courses item-resume'>
            <Typography variant='h4' className='sub-title'>
                Курсы
            </Typography>
            <div className='list'>
                {courses
                    ? courses.map((course) => (
                          <div className='item' key={course.name}>
                              <span className='time'>
                                  {course.timeEducation.start.substr(0, 4)}-
                                  {course.timeEducation.end.substr(0, 4)}
                              </span>
                              <span className='name'>{course.name}</span>

                              <span>{course.nameSchool}</span>
                          </div>
                      ))
                    : null}
            </div>
        </div>
    );
};

export default memo(Courses);
