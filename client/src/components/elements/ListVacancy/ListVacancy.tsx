import { ReactNode, useEffect } from 'react';

import { Typography } from '@material-ui/core';
import ItemVacancy from '../ItemVacancy/ItemVacancy';

import './ListVacancy.scss';

import { useAction } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const ListVacancy = () => {
    const { getListVacancies } = useAction();

    useEffect(() => {
        getListVacancies();
    }, []);

    const listVacancies = useTypedSelector(
        (state) => state.vacancy.listVacancies
    );

    const rows = (): Array<ReactNode> => {
        const rows: any = [];
        const tmp: Array<ReactNode> = [];

        listVacancies.forEach((itemData: any, index: any) => {
            tmp.push(
                <ItemVacancy
                    id={itemData.id}
                    title={itemData.title}
                    image={itemData.image}
                    groupName={itemData.groupName}
                    date={itemData.date}
                    price={itemData.price}
                    key={itemData.id}
                />
            );
            if ((index + 1) % 5 === 0 && index) {
                rows.push(
                    <div key={itemData.id + '1'} className="row">
                        {tmp.map((item) => item)}
                    </div>
                );
                tmp.length = 0;
            }
            if (listVacancies.length - 1 === index) {
                rows.push(
                    <div key={itemData.id} className="row">
                        {tmp.map((item) => item)}
                    </div>
                );
                tmp.length = 0;
            }
        });

        return rows;
    };

    return (
        <div className="ListVacancy">
            <Typography variant="h3">Вакансии</Typography>
            <div className="wrapper">{rows()}</div>
        </div>
    );
};

export default ListVacancy;
