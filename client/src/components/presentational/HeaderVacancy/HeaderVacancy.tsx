import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

import './HeaderVacancy.scss';

interface Prop {
    image: string;
    vacancyMusicTypeImage: string;
    profession: string;
    title: string;
    priceStart: number;
    priceEnd: number;
    idGroup: string;
    groupAvatar: string;
    groupName: string;
    datePosted: string;
}

const HeaderVacancy = ({
    image,
    vacancyMusicTypeImage,
    profession,
    title,
    priceStart,
    priceEnd,
    idGroup,
    groupAvatar,
    groupName,
    datePosted,
}: Prop) => {
    return (
        <div className="HeaderVacancy">
            <img className="background" src={image} alt="background" />
            <div className="darken"></div>
            <div className="wrapper">
                <span className="offer">Предложение от группы</span>
                <div className="divider"></div>
                <h1 className="title">
                    <img
                        className="type-vacancy"
                        src={vacancyMusicTypeImage}
                        alt={profession}
                    ></img>
                    {title}
                </h1>
                <div className="price">
                    <span className="price-start">от {priceStart}</span>
                    <span className="price-end"> до {priceEnd}</span>
                </div>
                <div className="divider"></div>
                <div className="group-info">
                    <Link to={`/group/${idGroup}`} className="link-group">
                        <Avatar src={groupAvatar}></Avatar>
                        <LinkIcon className="link-icon" />
                        <span className="group-name">{groupName}</span>
                    </Link>
                    <AccessAlarmIcon />
                    {datePosted}
                </div>
            </div>
        </div>
    );
};

export default HeaderVacancy;
