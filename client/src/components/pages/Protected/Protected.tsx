import React, { ReactNode } from 'react';

import { Route, Redirect } from 'react-router-dom';

interface Props {
    children: ReactNode;
    path: string;
}

const Protected = ({ children, ...rest }: Props) => {
    const statusReg: Boolean = true;

    return (
        <Route
            {...rest}
            render={({ location }) =>
                statusReg ? <Redirect to="/" /> : children
            }
        />
    );
};

export default Protected;
