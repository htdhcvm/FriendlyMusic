import React from 'react';

import './ItemVacancy.scss';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import { Link } from 'react-router-dom';

interface Prop {
    imageGroup?: string;
    title: string;
    groupName: string;
    price: number;
    data?: string;
}

const ItemVacancy = ({ imageGroup, title, groupName, price, data }: Prop) => {
    return (
        <Box className="ItemVacancy">
            <Link to="/vacancy">
                {imageGroup ? (
                    <img src={imageGroup} alt="vacancy group" />
                ) : (
                    <Skeleton variant="rect" width={190} height={190} />
                )}

                <div className="title">
                    <Typography gutterBottom variant="body2">
                        {title}
                    </Typography>
                    <Typography gutterBottom variant="body2">
                        {price}
                    </Typography>
                </div>
                <Typography
                    display="block"
                    variant="caption"
                    color="textSecondary"
                >
                    {groupName}
                </Typography>
                {data ? (
                    <Typography variant="caption" color="textSecondary">
                        {data}
                    </Typography>
                ) : null}
            </Link>
        </Box>
    );
};

export default ItemVacancy;
