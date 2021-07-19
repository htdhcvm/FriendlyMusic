import { FunctionComponent, memo } from 'react';

import './ItemVacancy.scss';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import { Link } from 'react-router-dom';

import VacancyItemList from '../../../types/VacancyItemList';
// interface Prop {
//     id: string;
//     imageGroup?: string;
//     title: string;
//     groupName: string;
//     price: number;
//     data?: string;
// }

const ItemVacancy: FunctionComponent<VacancyItemList> = ({
    id,
    title,
    image,
    groupName,
    date,
    price,
}) => {
    return (
        <Box className="ItemVacancy">
            <Link to={`/vacancy/${id}`}>
                {image ? (
                    <img src={image} alt="vacancy group" />
                ) : (
                    <Skeleton variant="rect" width={'100%'} height={190} />
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
                {date ? (
                    <Typography variant="caption" color="textSecondary">
                        {date}
                    </Typography>
                ) : null}
            </Link>
        </Box>
    );
};

export default memo(ItemVacancy);
