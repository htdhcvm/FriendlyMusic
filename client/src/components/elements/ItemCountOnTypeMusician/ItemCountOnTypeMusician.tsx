import React from 'react';

import './ItemCountOnTypeMusician.scss';
import Paper from '@material-ui/core/Paper';

interface Props {
    image: string;
    count: number;
}

const ItemCountOnTypeMusician = ({ image, count }: Props) => {
    return (
        <Paper elevation={2} className="ItemCountOnTypeMusician item">
            <img src={image} alt="type musician" />
            <span>{count}</span>
        </Paper>
    );
};

export default ItemCountOnTypeMusician;
