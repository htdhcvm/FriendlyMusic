import React from 'react';
import './TabUserGroup.scss';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const TabUserGroup = (props: any) => {
    const { value, index } = props;

    return (
        <div hidden={value !== index}>
            <Box p={3}>
                <Typography>TabUserGroup</Typography>
            </Box>
        </div>
    );
};

export default TabUserGroup;
