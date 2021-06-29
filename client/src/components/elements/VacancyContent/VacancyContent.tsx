import './VacancyContent.scss';

import { useTypedSelector } from '../../../hooks/useTypedSelector';

import HeaderVacancy from '../HeaderVacancy/HeaderVacancy';
import BarVacancy from '../BarVacancy/BarVacancy';
import TextVacancy from '../TextVacancy/TextVacancy';

const VacancyContent = () => {
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
        <div className="VacancyContent">
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

export default VacancyContent;
