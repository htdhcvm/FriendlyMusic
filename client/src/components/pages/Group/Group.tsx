import './Group.scss';

import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useAction } from '../../../hooks/useAction';
import { useParams } from 'react-router';
import generatePageElements from '../../../factoryComponents/Builder/GeneratePage';

import UserStatus from '../../../types/UserStatus';
import pageWithData from '../../hoc/pageWithData';

const Group = () => {
    let { idGroup } = useParams<{ idGroup: string }>();
    const status: UserStatus = useTypedSelector((state) => state.user.status);

    const { Header, Content, LeftPanel } = generatePageElements(
        'Group',
        status
    );

    const { getGroupOnId, clearGroupDate } = useAction();

    const ContentWithData = pageWithData({
        Component: Content,
        loadData: getGroupOnId,
        clearDate: clearGroupDate,
        id: idGroup,
    });

    return (
        <div className="Group">
            {Header ? <Header /> : null}
            {ContentWithData ? <ContentWithData /> : null}
            {LeftPanel ? <LeftPanel /> : null}
        </div>
    );
};

export default Group;
