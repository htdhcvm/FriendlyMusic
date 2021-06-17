import React from 'react';
import { useParams } from 'react-router-dom';

import './Vacancy.scss';

const Vacancy = () => {
    let { vacancyId } = useParams<{ vacancyId: string }>();
    return (
        <div>
            <h1>Vacancy {vacancyId}</h1>
        </div>
    );
};

export default Vacancy;
