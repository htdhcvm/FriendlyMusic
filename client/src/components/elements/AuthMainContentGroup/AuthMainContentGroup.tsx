import './AuthMainContentGroup.scss';

import ComponentWithLeftMenu from '../../../types/component/ComponentWithLeftMenu';

const AuthMainContentGroup = ({ toggleMenuClass }: ComponentWithLeftMenu) => {
    return (
        <div className={`AuthMainContentGroup ${toggleMenuClass}`}>
            <h1>AuthMainContentGroup</h1>
        </div>
    );
};

export default AuthMainContentGroup;
