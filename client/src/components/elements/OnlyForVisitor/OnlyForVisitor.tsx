import { Redirect, Route } from 'react-router';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const OnlyForVisitor = ({ children, ...rest }: any) => {
    const { status, isAuth } = useTypedSelector((state) => state.user);

    return (
        <Route
            {...rest}
            render={() =>
                isAuth && status !== 'visitor' ? (
                    <Redirect to="/main" />
                ) : (
                    children
                )
            }
        />
    );
};

export default OnlyForVisitor;
