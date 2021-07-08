import { FunctionComponent, useEffect } from 'react';

interface Prop {
    Component: FunctionComponent;
    loadData?: (id: string) => void;
    clearDate?: () => void;
    id?: string;
}

const pageWithData = ({ Component, loadData, clearDate, id }: Prop) => {
    return () => {
        useEffect(() => {
            if (loadData && id) loadData(id);

            return () => {
                if (clearDate) clearDate();
            };
        }, []);
        return <Component />;
    };
};

export default pageWithData;
