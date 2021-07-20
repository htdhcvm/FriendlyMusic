import { Typography } from '@material-ui/core';
import './TabUserMedia.scss';

const TabUserMedia = (props: any) => {
    const { value, index } = props;
    return (
        <div hidden={value !== index} className='TabUserMedia'>
            <Typography variant='h3'>TabUserMedia</Typography>
        </div>
    );
};

export default TabUserMedia;
