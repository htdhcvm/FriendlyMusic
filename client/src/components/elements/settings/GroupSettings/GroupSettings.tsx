import React from 'react';

import { useTypedSelector } from '../../../../hooks/useTypedSelector';

import TabGroupProfile from '../TabGroupProfile/TabGroupProfile';
import TabGroupManipulation from '../TabGroupManipulation/TabGroupManipulation';

const GroupSettings = () => {
    const { toggle } = useTypedSelector((state) => state.ui);

    return (
        <div
            className={`settings-element  GroupSettings ${
                toggle ? 'close-menu-resize-main' : ''
            }`}
        >
            <h1>GroupSettings</h1>
        </div>
    );
};

export default GroupSettings;
