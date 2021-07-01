import './AuthMainContentGroup.scss';

import ComponentWithLeftMenu from '../../../types/component/ComponentWithLeftMenu';
import ListResumes from '../ListResumes/ListResumes';

const AuthMainContentGroup = ({ toggleMenuClass }: ComponentWithLeftMenu) => {
    return (
        <div className={`AuthMainContentGroup ${toggleMenuClass}`}>
            <ListResumes />
        </div>
    );
};

export default AuthMainContentGroup;
