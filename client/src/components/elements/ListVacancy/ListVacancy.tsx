import { useEffect } from 'react';

import { Typography } from '@material-ui/core';

import './ListVacancy.scss';

import ItemVacancy from '../ItemVacancy/ItemVacancy';
import { useAction } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const ListVacancy = () => {
    const { getListVacancies } = useAction();

    const listVacancies = useTypedSelector(
        (state) => state.vacancy.list.listVacancy
    );

    console.log(listVacancies);
    useEffect(() => {
        getListVacancies();
    }, []);

    return (
        <div className="ListVacancy">
            <Typography variant="h3">Вакансии</Typography>
            <div className="wrapper">
                {listVacancies.map((vacancy) => (
                    <ItemVacancy
                        key={vacancy.id}
                        imageGroup={vacancy.image}
                        title={vacancy.name}
                        groupName={vacancy.groupName}
                        data={vacancy.date}
                        price={vacancy.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default ListVacancy;
