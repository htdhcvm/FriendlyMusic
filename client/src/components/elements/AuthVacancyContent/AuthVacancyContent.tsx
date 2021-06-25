import { SyntheticEvent, useState } from 'react';

import './AuthVacancyContent.scss';

import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

import HeaderVacancy from '../HeaderVacancy/HeaderVacancy';
import BarVacancy from '../BarVacancy/BarVacancy';
import TextVacancy from '../TextVacancy/TextVacancy';
import ButtonsVacancy from '../ButtonsVacancy/ButtonsVacancy';

const AuthVacancyContent = () => {
    const { toggle } = useTypedSelector((state) => state.ui);

    const {
        fromOffer,
        title,
        experience,
        description,
        requirement,
        responsibility,
        offer,
        quality,
        skills,
        image,
        groupData,
        socialLinks,
        priceStart,
        priceEnd,
        typeVacancyMusic,
        willPlus,
        date,
    } = useTypedSelector((state) => state.vacancy.currentVacancy);

    console.log(groupData);
    return (
        <div
            className={`AuthVacancyContent ${
                toggle ? 'close-menu-resize-main' : ''
            }`}
        >
            <HeaderVacancy
                image={image}
                vacancyMusicTypeImage={typeVacancyMusic.image}
                profession={typeVacancyMusic.profession}
                title={title}
                priceStart={priceStart}
                priceEnd={priceEnd}
                idGroup={groupData.idGroup}
                groupAvatar={groupData.avatar}
                groupName={groupData.name}
                datePosted={date.substr(0, 10)}
            />
            <BarVacancy
                idGroup={groupData.idGroup}
                groupName={groupData.name}
                socialLinks={socialLinks}
            />
            <TextVacancy
                Buttons={ButtonsVacancy}
                experience={experience}
                description={description}
                requirement={requirement}
                responsibility={responsibility}
                offer={offer}
                quality={quality}
                skills={skills}
                willPlus={willPlus}
                latlon={groupData.latlon}
            />
        </div>
    );
};

export default AuthVacancyContent;
