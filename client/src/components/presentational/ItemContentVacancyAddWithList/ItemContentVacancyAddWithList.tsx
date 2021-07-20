import { ReactNode } from 'react';
import { Typography } from '@material-ui/core';

interface Prop {
    children: ReactNode;
    title: string;
    description: string;
}

const ItemContentVacancyAddWithList = ({
    children,
    title,
    description,
}: Prop) => {
    return (
        <div className='ItemContentVacancyAddWithList content-item'>
            <div className='title'>
                <Typography variant='h5'>{title}</Typography>
                <span className='description'>{description}</span>
            </div>
            <div className='wrapper wrapper-action'>{children}</div>
        </div>
    );
};

export default ItemContentVacancyAddWithList;
