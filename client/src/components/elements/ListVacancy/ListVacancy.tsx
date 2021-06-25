import { ReactNode, useEffect } from 'react';

import { Typography } from '@material-ui/core';

import './ListVacancy.scss';

import ItemVacancy from '../ItemVacancy/ItemVacancy';
import { useAction } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const ListVacancy = () => {
    const { getListVacancies } = useAction();

    const listVacancies = useTypedSelector(
        (state) => state.vacancy.listVacancies
    );

    useEffect(() => {
        getListVacancies();
    }, []);

    const generateRows = (): ReactNode => {
        const rows: any = [];
        const tmp: Array<ReactNode> = [];
        listVacancies.forEach((vacancy, index) => {
            tmp.push(
                <ItemVacancy
                    key={vacancy.id}
                    id={vacancy.id}
                    imageGroup={vacancy.image}
                    title={vacancy.title}
                    groupName={vacancy.groupName}
                    data={vacancy.date}
                    price={vacancy.price}
                />
            );

            if ((index + 1) % 5 === 0 && index) {
                rows.push(
                    <div key={vacancy.id + '1'} className="row">
                        {tmp.map((item) => item)}
                    </div>
                );
                tmp.length = 0;
            }

            if (listVacancies.length - 1 === index) {
                rows.push(
                    <div key={vacancy.id} className="row">
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
            <div className="wrapper">{generateRows()}</div>
        </div>
    );
};

export default ListVacancy;
