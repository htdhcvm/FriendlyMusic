import { FunctionComponent } from 'react';

import './ItemResume.scss';

import { Link } from 'react-router-dom';
import ResumeItemList from '../../../types/ResumeItemList';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

const ItemResume: FunctionComponent<ResumeItemList> = ({
    id,
    title,
    image,
    userName,
    date,
    price,
}) => {
    return (
        <Box className="ItemResume">
            <Link to={`/resume/${id}`}>
                {image ? (
                    <img src={image} alt="resume user" />
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
                    {userName}
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

export default ItemResume;
