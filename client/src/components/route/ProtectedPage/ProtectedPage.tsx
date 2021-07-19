import { Redirect, Route } from 'react-router';
import { useTypedSelector } from '@Hooks/useTypedSelector';

const ProtectedPage = ({ children, ...rest }: any) => {
    const { isAuth } = useTypedSelector((state) => state.user);

    return (
        <Route
            {...rest}
            render={() => (isAuth ? children : <Redirect to='/main' />)}
        />
    );
};

export default ProtectedPage;
