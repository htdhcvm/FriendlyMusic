import './ResumeContent.scss';

import ComponentWithLeftMenu from '../../../types/component/ComponentWithLeftMenu';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { Typography } from '@material-ui/core';
import ButtonsVacancy from '../ButtonsVacancy/ButtonsVacancy';
import LinkIcon from '@material-ui/icons/Link';
import { Link } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';
import ItemTextDescription from '../ItemTextDescription/ItemTextDescription';
import ItemSocial from '../ItemSocial/ItemSocial';
import PrevWorkPlace from '../PrevWorkPlace/PrevWorkPlace';
import EducationList from '../EducationList/EducationList';
import Courses from '../Courses/Courses';

const ResumeContent = ({ toggleMenuClass }: ComponentWithLeftMenu) => {
    const {
        idUser,
        fio,
        title,
        dateBirthday,
        gander,
        telephone,
        address,
        email,
        site,
        profession,
        musicInstrument,
        experience,
        aboutYourSelf,
        language,
        socialList,
        skills,
        quality,
        prevWorkList,
        institutionList,
        coursesList,
        kindActivity,
        salary,
        avatar,
    } = useTypedSelector((state) => state.resumes.currentResume);

    console.log();
    return (
        <div className={`MainContent ResumeContent ${toggleMenuClass}`}>
            <div className="photo">
                {avatar && avatar.length > 0 ? (
                    <img alt="avatar resume" src={avatar} />
                ) : (
                    <Skeleton variant="rect" width={'100%'} height={400} />
                )}
            </div>

            <div className="text">
                <div className="target">
                    <Typography variant="h2" className="text">
                        Цель: {title}
                    </Typography>
                </div>

                <Typography variant="h4" className="salary-text">
                    Зарплата от: {salary} т рублей.
                </Typography>

                <div className="title">
                    <Typography variant="h2" className="fio">
                        {fio}
                        <Link to={`/user/${idUser}`}>
                            <LinkIcon className="link" />
                        </Link>
                    </Typography>
                    <ButtonsVacancy />
                </div>

                <div className="item-resume main-info">
                    <Typography variant="h4" className="sub-title">
                        Основная информация
                    </Typography>
                    <div className="fill">
                        {kindActivity ? (
                            <ItemTextDescription
                                data={kindActivity.description}
                                descriptionText="Вид деятельности:"
                            />
                        ) : null}
                        <ItemTextDescription
                            data={dateBirthday}
                            descriptionText="Год рождения:"
                        />

                        <ItemTextDescription
                            data={gander}
                            descriptionText="Пол:"
                        />

                        <ItemTextDescription
                            data={skills}
                            descriptionText="Умения:"
                        />
                        <ItemTextDescription
                            data={language}
                            descriptionText="Языки:"
                        />

                        <ItemTextDescription
                            data={site}
                            descriptionText="Сайт:"
                        />
                        {profession ? (
                            <ItemTextDescription
                                data={profession.description}
                                descriptionText="Профессия:"
                            />
                        ) : null}

                        <ItemTextDescription
                            data={musicInstrument}
                            descriptionText="Музыкальный инструмент:"
                        />
                    </div>
                </div>

                <div className="item-resume profession-info">
                    <Typography variant="h4" className="sub-title">
                        Профессиональная информация
                    </Typography>
                    <div className="fill">
                        <ItemTextDescription
                            data={title}
                            descriptionText="Желаемая позиция:"
                        />
                        <ItemTextDescription
                            data={quality}
                            descriptionText="Качества:"
                        />
                        <ItemTextDescription
                            data={aboutYourSelf}
                            descriptionText="Описание:"
                        />
                        <ItemTextDescription
                            data={experience}
                            descriptionText="Опыт работы:"
                        />
                    </div>
                </div>

                <PrevWorkPlace works={prevWorkList} />
                <EducationList educations={institutionList} />
                <Courses courses={coursesList} />

                <div className="item-resume contact-info">
                    <Typography variant="h4" className="sub-title">
                        Контактная информация
                    </Typography>

                    <div className="fill">
                        <ItemTextDescription
                            data={telephone}
                            descriptionText="Номер телефона:"
                        />
                        <ItemTextDescription
                            data={address}
                            descriptionText="Адрес:"
                        />
                        <ItemTextDescription
                            data={email}
                            descriptionText="email:"
                        />
                        <ItemSocial
                            data={socialList}
                            descriptionText="Социальные сети:"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeContent;
