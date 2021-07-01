import { FunctionComponent, useEffect } from 'react';
import { useAction } from '../../hooks/useAction';
import { useParams } from 'react-router-dom';

interface Prop {
    Component: FunctionComponent;
}

const withResumeData = ({ Component }: Prop) => {
    return () => {
        let { resumeId } = useParams<{ resumeId: string }>();

        const { getResumeOnId, clearResumeData } = useAction();

        useEffect(() => {
            getResumeOnId(resumeId);

            return () => {
                clearResumeData();
            };
        }, []);

        return <Component />;
    };
};
export default withResumeData;
