import React from 'react';

import { useTypedSelector } from '@Hooks/useTypedSelector';

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
