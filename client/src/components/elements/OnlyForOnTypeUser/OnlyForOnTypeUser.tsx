import { Redirect, Route } from 'react-router';

const OnlyForOnTypeUser = ({ children, ...rest }: any) => {
    const { status, isAuth, path } = rest;

    return (
        <Route
            {...rest}
            render={() =>
                path === '/signInSignUp' &&
                isAuth === false &&
                status === 'visitor' ? (
                    children
                ) : path === '/user/createResume' &&
                  isAuth &&
                  status === 'user' ? (
                    children
                ) : path === '/user/createGroup' &&
                  isAuth &&
                  status === 'user' ? (
                    children
                ) : path === '/group/createVacancy' &&
                  isAuth &&
                  status === 'group' ? (
                    children
                ) : (
                    <Redirect to="/main" />
                )
            }
        />
    );
};

export default OnlyForOnTypeUser;
