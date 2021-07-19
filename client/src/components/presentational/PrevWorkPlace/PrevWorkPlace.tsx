import { Typography } from '@material-ui/core';
import { memo } from 'react';
import { Work } from '@Types/User';

import './PrevWorkPlace.scss';

interface PrevWorkPlaceProp {
    works: Array<Work<string>> | undefined;
}

const PrevWorkPlace = ({ works }: PrevWorkPlaceProp) => {
    return (
        <div className='PrevWorkPlace item-resume'>
            <Typography variant='h4' className='sub-title'>
                Места работы
            </Typography>
            <div className='list'>
                {works
                    ? works.map((work) => (
                          <div className='item' key={work.name}>
                              <span className='time'>
                                  {work.periodWork.start.substr(0, 4)}-
                                  {work.periodWork.end.substr(0, 4)}
                              </span>

                              <span className='name'>
                                  <a
                                      href={work.link}
                                      target='_blank'
                                      rel='noreferrer nofollow'
                                  >
                                      {work.name}
                                  </a>
                              </span>

                              <span>{work.position}</span>
                          </div>
                      ))
                    : null}
            </div>
        </div>
    );
};

export default memo(PrevWorkPlace);
