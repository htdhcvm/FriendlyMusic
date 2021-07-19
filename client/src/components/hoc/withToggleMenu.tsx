import { FunctionComponent } from 'react';

import AuthVacancyContent from '../container/AuthVacancyContent/AuthVacancyContent';
import AuthMainContentUser from '../container/AuthMainContentUser/AuthMainContentUser';
import AuthMainContentGroup from '../container/AuthMainContentGroup/AuthMainContentGroup';
import ResumeContent from '../container/ResumeContent/ResumeContent';
import UserContent from '../container/UserContent/UserContent';

import { useTypedSelector } from '../../hooks/useTypedSelector';

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
