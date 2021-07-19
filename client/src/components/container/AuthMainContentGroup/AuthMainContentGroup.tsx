import './AuthMainContentGroup.scss';

import ComponentWithLeftMenu from '@Types/component/ComponentWithLeftMenu';
import ListResumes from '@Container/ListResumes/ListResumes';

const AuthMainContentGroup = ({ toggleMenuClass }: ComponentWithLeftMenu) => {
    return (
        <div className={`AuthMainContentGroup ${toggleMenuClass}`}>
            <ListResumes />
        </div>
    );
};

export default AuthMainContentGroup;
