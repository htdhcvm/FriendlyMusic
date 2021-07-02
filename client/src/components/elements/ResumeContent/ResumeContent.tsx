import './ResumeContent.scss';

import ComponentWithLeftMenu from '../../../types/component/ComponentWithLeftMenu';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { Typography } from '@material-ui/core';
import ButtonsVacancy from '../ButtonsVacancy/ButtonsVacancy';
import Social from '../../../types/Social';
import LinkIcon from '@material-ui/icons/Link';
import { Course, Work, Institution } from '../../../types/Resume';
import { Link } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';
import { FunctionComponent } from 'react';

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
                            <Item
                                data={kindActivity.description}
                                descriptionText="Вид деятельности:"
                            />
                        ) : null}
                        <Item
                            data={dateBirthday}
                            descriptionText="Год рождения:"
                        />

                        <Item data={gander} descriptionText="Пол:" />

                        <Item data={skills} descriptionText="Умения:" />
                        <Item data={language} descriptionText="Языки:" />

                        <Item data={site} descriptionText="Сайт:" />
                        {profession ? (
                            <Item
                                data={profession.description}
                                descriptionText="Профессия:"
                            />
                        ) : null}

                        <Item
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
                        <Item
                            data={title}
                            descriptionText="Желаемая позиция:"
                        />
                        <Item data={quality} descriptionText="Качества:" />
                        <Item
                            data={aboutYourSelf}
                            descriptionText="Описание:"
                        />
                        <Item
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
                        <Item
                            data={telephone}
                            descriptionText="Номер телефона:"
                        />
                        <Item data={address} descriptionText="Адрес:" />
                        <Item data={email} descriptionText="email:" />
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

interface ItemSocialProp {
    data: Array<Social> | undefined;
    descriptionText: string;
}
const ItemSocial = ({ data, descriptionText }: ItemSocialProp) => {
    return (
        <div className="item" key={descriptionText}>
            {data && data.length > 0 ? (
                <>
                    <span className="description">{descriptionText}</span>
                    <div className="listSocial">
                        {data.map((social) => (
                            <a
                                href={social.link}
                                target="_blank"
                                key={social.name}
                            >
                                <img
                                    className="socialImage"
                                    src={social.image}
                                    alt="social"
                                />
                            </a>
                        ))}
                    </div>
                </>
            ) : null}
        </div>
    );
};

interface ItemProp {
    data: string | undefined | Array<string>;
    descriptionText: string;
}
const Item = ({ data, descriptionText }: ItemProp) => {
    return (
        <div className="item">
            {data && data.length > 0 ? (
                <>
                    <span className="description">{descriptionText}</span>
                    {Array.isArray(data) ? (
                        <Tag list={data} />
                    ) : (
                        <span className="text">{data}</span>
                    )}
                </>
            ) : null}
        </div>
    );
};

interface Prop {
    list: Array<string>;
}

const Tag = ({ list }: Prop) => {
    return (
        <div className="tags">
            {list.map((item) => {
                return (
                    <div key={item} className="tag">
                        {item}
                    </div>
                );
            })}
        </div>
    );
};

interface PrevWorkPlaceProp {
    works: Array<Work> | undefined;
}

const PrevWorkPlace = ({ works }: PrevWorkPlaceProp) => {
    return (
        <div className="PrevWorkPlace item-resume">
            <Typography variant="h4" className="sub-title">
                Места работы
            </Typography>
            <div className="list">
                {works
                    ? works.map((work) => (
                          <div className="item" key={work.name}>
                              <span className="time">
                                  {work.periodWork.start.substr(0, 4)}-
                                  {work.periodWork.end.substr(0, 4)}
                              </span>

                              <span className="name">
                                  <a
                                      href={work.link}
                                      target="_blank"
                                      rel="noreferrer nofollow"
                                  >
                                      {work.name}
                                  </a>
                              </span>

                              <span>{work.position}</span>
                          </div>
                      ))
                    : null}
            </div>
        </div>
    );
};

interface EducationListProp {
    educations: Array<Institution> | undefined;
}

const EducationList = ({ educations }: EducationListProp) => {
    return (
        <div className="EducationList item-resume">
            <Typography variant="h4" className="sub-title">
                Образование
            </Typography>
            <div className="list">
                {educations
                    ? educations.map((education) => (
                          <div className="item" key={education.name}>
                              <span className="time">
                                  {education.timeEducation.start.substr(0, 4)}-
                                  {education.timeEducation.end.substr(0, 4)}
                              </span>
                              <span className="name">
                                  {education.nameFaculty}
                              </span>

                              <span>{education.qualification}</span>
                          </div>
                      ))
                    : null}
            </div>
        </div>
    );
};

interface CoursesProp {
    courses: Array<Course> | undefined;
}

const Courses = ({ courses }: CoursesProp) => {
    return (
        <div className="Courses item-resume">
            <Typography variant="h4" className="sub-title">
                Курсы
            </Typography>
            <div className="list">
                {courses
                    ? courses.map((course) => (
                          <div className="item" key={course.name}>
                              <span className="time">
                                  {course.timeEducation.start.substr(0, 4)}-
                                  {course.timeEducation.end.substr(0, 4)}
                              </span>
                              <span className="name">{course.name}</span>

                              <span>{course.nameSchool}</span>
                          </div>
                      ))
                    : null}
            </div>
        </div>
    );
};

export default ResumeContent;
