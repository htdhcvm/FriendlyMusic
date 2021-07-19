import './UserContent.scss';

import ComponentWithLeftMenu from '../../../types/component/ComponentWithLeftMenu';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Typography from '@material-ui/core/Typography';
import ItemTextDescription from '../../presentational/ItemTextDescription/ItemTextDescription';
import ItemSocial from '../../presentational/ItemSocial/ItemSocial';
import PrevWorkPlace from '../../presentational/PrevWorkPlace/PrevWorkPlace';
import EducationList from '../EducationList/EducationList';
import Courses from '../../presentational/Courses/Courses';

const UserContent = ({ toggleMenuClass }: ComponentWithLeftMenu) => {
    const {
        login,
        fio,
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
        avatar,
        language,
        skills,
        quality,
        listVideos,
        socialList,
        photos,
        prevWorksList,
        institutionList,
        coursesList,
    } = useTypedSelector((state) => state.user.currentUser);

    return (
        <div className={`UserContent ${toggleMenuClass}`}>
            <img src={avatar} alt='user avatar' className='avatar' />
            <div className='content'>
                <Typography variant='h2' className='fio'>
                    {fio}
                </Typography>
                <div className='main-info item'>
                    <Typography variant='h5' className='title'>
                        Основная информация
                    </Typography>
                    {profession ? (
                        <ItemTextDescription
                            data={profession.description}
                            descriptionText={'Вид деятельности: '}
                        />
                    ) : null}
                    <ItemTextDescription
                        data={gander}
                        descriptionText={'Пол: '}
                    />
                    <ItemTextDescription
                        data={dateBirthday}
                        descriptionText={'Год рождения: '}
                    />
                    <ItemTextDescription
                        data={skills}
                        descriptionText={'Умения: '}
                    />
                    <ItemTextDescription
                        data={language}
                        descriptionText={'Языки: '}
                    />
                </div>
                <div className='photo item'>
                    <Typography variant='h5' className='title'>
                        Фото
                    </Typography>
                    <div className='list-photo'>
                        {photos
                            ? photos.map((photo: string, index) => (
                                  <img
                                      className='item-photo'
                                      alt={`own-${photo}`}
                                      key={photo + index}
                                      src={photo}
                                  />
                              ))
                            : null}
                    </div>
                </div>
                <div className='video item'>
                    <Typography variant='h5' className='title'>
                        Видео
                    </Typography>
                    <div className='list-video'>
                        {listVideos
                            ? listVideos.map((video) => (
                                  <div
                                      key={video}
                                      className='item-video'
                                      dangerouslySetInnerHTML={{
                                          __html: video,
                                      }}
                                  ></div>
                              ))
                            : null}
                    </div>
                </div>
                <div className='wrapper-text'>
                    <div className='contact-info item'>
                        <Typography variant='h5' className='title'>
                            Контактная информация
                        </Typography>

                        <ItemTextDescription
                            data={telephone}
                            descriptionText={'Номер телефона: '}
                        />
                        <ItemTextDescription
                            data={address}
                            descriptionText={'Адрес: '}
                        />
                        <ItemTextDescription
                            data={email}
                            descriptionText={'email: '}
                        />
                        <ItemSocial
                            data={socialList}
                            descriptionText={'Социальные сети: '}
                        />
                        <ItemTextDescription
                            data={site}
                            descriptionText={'Сайт: '}
                        />
                    </div>
                    <div className='profession-info item'>
                        <Typography variant='h5' className='title'>
                            Профессиональная информация
                        </Typography>
                        <ItemTextDescription
                            data={musicInstrument}
                            descriptionText={'Муз инструмент: '}
                        />
                        <ItemTextDescription
                            data={quality}
                            descriptionText={'Качества: '}
                        />
                        <ItemTextDescription
                            data={aboutYourSelf}
                            descriptionText={'Описание: '}
                        />
                        <ItemTextDescription
                            data={experience}
                            descriptionText={'Опыт работы: '}
                        />
                        <PrevWorkPlace works={prevWorksList} />
                        <div className='divider'></div>
                    </div>
                    <div className='education item'>
                        <EducationList educations={institutionList} />
                        <Courses courses={coursesList} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserContent;
