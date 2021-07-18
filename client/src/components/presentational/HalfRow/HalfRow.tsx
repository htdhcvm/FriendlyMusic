import React, { ReactNode } from 'react';

import './HalfRow.scss';

const HalfRow = ({ children }: { children: ReactNode }) => {
    return (
        <div className='HalfRow'>
            {children}
            <div className='cap'></div>
        </div>
    );
};

export default HalfRow;
