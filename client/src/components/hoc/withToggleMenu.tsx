import { FunctionComponent } from 'react';

import AuthVacancyContent from '@Container/AuthVacancyContent/AuthVacancyContent';
import AuthMainContentUser from '@Container/AuthMainContentUser/AuthMainContentUser';
import AuthMainContentGroup from '@Container/AuthMainContentGroup/AuthMainContentGroup';
import ResumeContent from '@Container/ResumeContent/ResumeContent';
import UserContent from '@Container/UserContent/UserContent';

import { useTypedSelector } from '@Hooks/useTypedSelector';

interface Prop {
    Component:
        | typeof AuthVacancyContent
        | typeof AuthMainContentUser
        | typeof ResumeContent
        | typeof UserContent
        | typeof AuthMainContentGroup;
}

const withToggleMenu = ({ Component }: Prop): FunctionComponent => {
    return function () {
        const { toggle } = useTypedSelector((state) => state.ui);
        const toggleClass = toggle ? 'close-menu-resize-main' : '';

        return <Component toggleMenuClass={toggleClass} />;
    };
};

export default withToggleMenu;
