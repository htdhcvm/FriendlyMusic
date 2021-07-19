import './AuthVacancyContent.scss';

import { useTypedSelector } from '../../../hooks/useTypedSelector';

import HeaderVacancy from '../../presentational/HeaderVacancy/HeaderVacancy';
import BarVacancy from '../../presentational/BarVacancy/BarVacancy';
import TextVacancy from '../TextVacancy/TextVacancy';
import ButtonsVacancy from '../../presentational/ButtonsVacancy/ButtonsVacancy';
import { useAction } from '../../../hooks/useAction';
import { useParams } from 'react-router';
import { useEffect } from 'react';

import ComponentWithLeftMenu from '../../../types/component/ComponentWithLeftMenu';

const AuthVacancyContent = ({ toggleMenuClass }: ComponentWithLeftMenu) => {
    const { getVacancyOnId, clearCurrentVacancyData } = useAction();
    const { vacancyId } = useParams<{ vacancyId: string }>();

    useEffect(() => {
        getVacancyOnId(vacancyId);
        return () => {
            clearCurrentVacancyData();
        };
    }, []);

    const {
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

    return (
        <div className={`AuthVacancyContent ${toggleMenuClass}`}>
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
