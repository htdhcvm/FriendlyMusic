import React from 'react';

import './ListVacancy.scss';

import ItemVacancy from '../ItemVacancy/ItemVacancy';
import { Typography } from '@material-ui/core';

import tempGroup1 from '../../../assets/temporary/tempGroup1.jpeg';
import tempGroup2 from '../../../assets/temporary/tempGroup2.jpg';
import tempGroup3 from '../../../assets/temporary/tempGroup3.jpg';

const ListVacancy = () => {
    const listVacancyCollection = [
        {
            id: 1,
            image: tempGroup1,
            title: 'Басс гитарист',
            groupName: 'Metallica',
            data: '21.04.2021 16:24',
            price: 450000,
        },
        {
            id: 2,
            image: tempGroup2,
            title: 'Ритм гитарис',
            groupName: 'MMM',
            data: '21.04.2021 16:24',
            price: 450000,
        },
        {
            id: 3,
            image: tempGroup3,
            title: 'Диджей',
            groupName: 'Miyagi & Andy Panda',
            data: '21.04.2021 16:24',
            price: 450000,
        },
        {
            id: 4,
            title: 'Басс гитарист',
            groupName: 'Metallica',
            data: '21.04.2021 16:24',
            price: 450000,
        },
    ];
    return (
        <div className="ListVacancy">
            <Typography variant="h3">Вакансии</Typography>
            <div className="wrapper">
                {listVacancyCollection.map((vacancy) => (
                    <ItemVacancy
                        key={vacancy.id}
                        imageGroup={vacancy.image}
                        title={vacancy.title}
                        groupName={vacancy.groupName}
                        data={vacancy.data}
                        price={vacancy.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default ListVacancy;
