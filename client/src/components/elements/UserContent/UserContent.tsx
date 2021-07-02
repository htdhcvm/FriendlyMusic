import './UserContent.scss';

import ComponentWithLeftMenu from '../../../types/component/ComponentWithLeftMenu';

const UserContent = ({ toggleMenuClass }: ComponentWithLeftMenu) => {
    return (
        <div className={`UserContent ${toggleMenuClass}`}>
            <h1>UserContent</h1>
        </div>
    );
};

export default UserContent;
