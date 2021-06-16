import React, { ReactNode } from 'react';

import { Route, Redirect } from 'react-router-dom';

interface Props {
    children: ReactNode;
    path: string;
}

const RedirectMain = ({ children, ...rest }: Props) => {
    const statusReg: boolean = false;

    return (
        <Route
            {...rest}
            render={({ location }) =>
                statusReg ? <Redirect to="/main" /> : children
            }
        />
    );
};

export default RedirectMain;
