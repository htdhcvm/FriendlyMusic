import './Resume.scss';

import AuthHeader from '../../container/AuthHeader/AuthHeader';
import LeftPanel from '../../container/LeftPanel/LeftPanel';
import ResumeContent from '../../container/ResumeContent/ResumeContent';

import withToggleMenu from '../../hoc/withToggleMenu';
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
