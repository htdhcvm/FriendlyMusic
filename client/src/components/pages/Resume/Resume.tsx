import './Resume.scss';

import AuthHeader from '@Container/AuthHeader/AuthHeader';
import LeftPanel from '@Container/LeftPanel/LeftPanel';
import ResumeContent from '@Container/ResumeContent/ResumeContent';
import withToggleMenu from '@Hoc/withToggleMenu';

import { memo } from 'react';

const Resume = () => {
    const Content = withToggleMenu({ Component: ResumeContent });

    return (
        <div className='Resume'>
            <AuthHeader />
            <LeftPanel />
            <Content />
        </div>
    );
};

export default memo(Resume);
