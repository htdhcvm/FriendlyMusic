import { FunctionComponent, useEffect } from 'react';
import { useAction } from '../../hooks/useAction';
import { useParams } from 'react-router-dom';

interface Prop {
    Component: FunctionComponent;
}

const withUserData = ({ Component }: Prop) => {
    return () => {
        let { idUser } = useParams<{ idUser: string }>();

        const { getUserOnId, clearUserData } = useAction();

        useEffect(() => {
            getUserOnId(idUser);

            return () => {
                clearUserData();
            };
        }, []);

        return <Component />;
    };
};
export default withUserData;
