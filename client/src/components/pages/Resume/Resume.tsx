import './Resume.scss';

import AuthHeader from '../../container/AuthHeader/AuthHeader';
import LeftPanel from '../../container/LeftPanel/LeftPanel';
import ResumeContent from '../../container/ResumeContent/ResumeContent';

import withToggleMenu from '../../hoc/withToggleMenu';
import withResumeData from '../../hoc/withResumeData';

const Resume = () => {
    const Content = withResumeData({
        Component: withToggleMenu({ Component: ResumeContent }),
    });
    return (
        <div className='Resume'>
            <AuthHeader />
            <LeftPanel />
            <Content />
        </div>
    );
};

export default Resume;
