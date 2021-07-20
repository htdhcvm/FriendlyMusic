import './CreateResume.scss';

import AuthHeader from '@Container/AuthHeader/AuthHeader';
import LeftPanel from '@Container/LeftPanel/LeftPanel';
import CreateResumeContent from '@Container/CreateResumeContent/CreateResumeContent';

import withToggleMenu from '@Hoc/withToggleMenu';

const CreateResume = () => {
    const Content = withToggleMenu({ Component: CreateResumeContent });
    return (
        <div className='CreateResume'>
            <AuthHeader />
            <LeftPanel />
            <Content />
        </div>
    );
};

export default CreateResume;
