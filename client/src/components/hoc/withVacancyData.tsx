import { FunctionComponent, useEffect } from 'react';
import { useAction } from '../../hooks/useAction';
import { useParams } from 'react-router-dom';

interface Prop {
    Component: FunctionComponent;
}

const withVacancyData = ({ Component }: Prop): FunctionComponent => {
    return function () {
        let { vacancyId } = useParams<{ vacancyId: string }>();

        const { getVacancyOnId, clearCurrentVacancyData } = useAction();

        useEffect(() => {
            getVacancyOnId(vacancyId);

            return () => {
                clearCurrentVacancyData();
            };
        }, []);

        return { Component } ? <Component /> : null;
    };
};

export default withVacancyData;
