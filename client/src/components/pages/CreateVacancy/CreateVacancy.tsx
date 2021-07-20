import './CreateVacancy.scss';

import AuthHeader from '@Container/AuthHeader/AuthHeader';
import LeftPanel from '@Container/LeftPanel/LeftPanel';
import CreateVacancyContent from '@Container/CreateVacancyContent/CreateVacancyContent';

import withToggleMenu from '@Hoc/withToggleMenu';

const CreateVacancy = () => {
    const Content = withToggleMenu({ Component: CreateVacancyContent });

    return (
        <div className='CreateVacancy'>
            <AuthHeader />
            <LeftPanel />
            <Content />
        </div>
    );
};

export default CreateVacancy;
