import './GroupPageContentAuth.scss';

import ComponentWithLeftMenu from '../../../types/component/ComponentWithLeftMenu';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import ItemTextDescription from '../../presentational/ItemTextDescription/ItemTextDescription';
import ItemSocial from '../../presentational/ItemSocial/ItemSocial';
import MapGoogle from '../../presentational/GoogleMap/GoogleMap';
import { Link } from 'react-router-dom';
import { useAction } from '../../../hooks/useAction';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useRef } from 'react';

const GroupPageContentAuth = ({ toggleMenuClass }: ComponentWithLeftMenu) => {
    const [value, setValue] = useState(0);
    let { idGroup } = useParams<{ idGroup: string }>();

    const { getGroupOnId, clearGroupDate } = useAction();

    const prev = useRef(toggleMenuClass);

    useEffect(() => {
        getGroupOnId(idGroup);

        // return () => {
        //     clearGroupDate();
        // };
    }, [getGroupOnId, clearGroupDate]);

    const {
        name,
        description,
        experience,
        typeGroup,
        musicalGenre,
        existRepetitionBase,
        commerceProject,
        listParticipantsGroup,
        email,
        address,
        telephone,
        socialList,
        listVideos,
        avatar,
        photos,
        latlon,
    } = useTypedSelector((state) => state.group.currentGroup);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    return (
        <div className={`GroupPageContentAuth ${toggleMenuClass}`}>
            <div className='group-content-header'>
                <Typography variant='h2' className='name'>
                    {name}
                </Typography>
                <img
                    className='group-background'
                    src={avatar}
                    alt={`avatar ${avatar}`}
                />
            </div>
            <Tabs
                value={value}
                onChange={handleChange}
                className='wrapper-tab'
                aria-label='simple tabs example'
                indicatorColor='primary'
                textColor='primary'
                centered
            >
                <Tab className='tab' label='Основная информация' />
                <Tab className='tab' label='Профессиональная информация' />
                <Tab className='tab' label='Контакты' />
                <Tab className='tab' label='Медиа' />
            </Tabs>

            <TabPanel value={value} index={0}>
                <ItemTextDescription
                    descriptionText='Описание'
                    data={description}
                />
                <ItemSocial
                    descriptionText='Социальные сети'
                    data={socialList}
                />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Typography className='title-info' variant='h5'>
                    Основная информция о группе
                </Typography>

                <ItemTextDescription descriptionText='Опыт' data={experience} />
                <ItemTextDescription
                    descriptionText='Тип группы'
                    data={typeGroup}
                />
                <ItemTextDescription
                    descriptionText='Музыкальный жанр'
                    data={musicalGenre}
                />
                <ItemTextDescription
                    descriptionText='Репетиционное место'
                    data={existRepetitionBase}
                />

                <ItemTextDescription
                    descriptionText='Коммерческий проект'
                    data={commerceProject}
                />

                {listParticipantsGroup ? (
                    <div className='participants-group'>
                        <Typography variant='h5' className='title-info'>
                            Участники группы
                        </Typography>
                        <div className='list'>
                            {listParticipantsGroup.map((participant, index) => (
                                <Link to={`/user/${participant.id}`}>
                                    <div
                                        className='item-participant'
                                        key={`participant-${participant}-${index}`}
                                    >
                                        <img
                                            src={participant.avatar}
                                            alt={`participant-${participant}-${index}`}
                                        />
                                        <Typography variant='h6'>
                                            {participant.name}
                                        </Typography>
                                        <Typography variant='subtitle1'>
                                            {participant.type === 'owner'
                                                ? 'Владелец'
                                                : 'Участник'}
                                        </Typography>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ) : null}
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ItemTextDescription descriptionText='Адресс' data={address} />
                <ItemTextDescription
                    descriptionText='Телефон'
                    data={telephone}
                />
                <ItemTextDescription descriptionText='e-mail' data={email} />
                {latlon ? <MapGoogle latlon={latlon} /> : null}
            </TabPanel>
            <TabPanel value={value} index={3}>
                <div className='wrapper-photo'>
                    <Typography className='title' variant='h5'>
                        Фото
                    </Typography>
                    <div className='list-photo'>
                        {photos ? (
                            photos.map((photo, index) => (
                                <img
                                    key={`${photo}-${index}`}
                                    alt={`${photo}-${index}`}
                                    src={photo}
                                />
                            ))
                        ) : (
                            <Typography>Фотографии не загружены</Typography>
                        )}
                    </div>
                </div>
                <div className='wrapper-photo'>
                    <Typography className='title' variant='h5'>
                        Видео
                    </Typography>
                    <div className='list-video'>
                        {listVideos
                            ? listVideos.map((video, index) => (
                                  <div
                                      key={`video-item-${video}-${index}`}
                                      className='item'
                                      dangerouslySetInnerHTML={{
                                          __html: video,
                                      }}
                                  ></div>
                              ))
                            : null}
                    </div>
                </div>
            </TabPanel>
        </div>
    );
};

const TabPanel = (props: any) => {
    const { children, value, index } = props;
    return (
        <div role='tabpanel' className='item-content' hidden={value !== index}>
            {value === index && (
                <Box className='box' p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
};

export default GroupPageContentAuth;
