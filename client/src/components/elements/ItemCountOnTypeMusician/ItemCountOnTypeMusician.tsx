import React from 'react';

import './ItemCountOnTypeMusician.scss';
import Paper from '@material-ui/core/Paper';

interface Props {
    title: string;
    image: string;
    count?: number | undefined;
}

const ItemCountOnTypeMusician = ({ title, image, count }: Props) => {
    return (
        <Paper elevation={2} className="ItemCountOnTypeMusician item">
            <span className="title">{title}</span>
            <div className="footer">
                <img src={image} alt="type musician" />
                <span className="count">{count ? count : null}</span>
            </div>
        </Paper>
    );
};

export default ItemCountOnTypeMusician;
