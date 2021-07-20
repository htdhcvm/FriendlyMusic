import './CreateVacancyContent.scss';

import ComponentWithLeftMenu from '@Types/component/ComponentWithLeftMenu';
import { Typography } from '@material-ui/core';
import { ChangeEvent, useState } from 'react';

import categoryMusician from '@StaticData/categoryMusician';
import experience from '@StaticData/experience';

import WrapperFieldAdd from '@Presentational/WrapperFieldAdd/WrapperFieldAdd';
import Row from '@Presentational/Row/Row';
import Field from '@Presentational/FieldText/FieldText';
import FieldSelect from '@Presentational/FieldSelect/FieldSelect';
import Tag from '@Presentational/Tag/Tag';
import FieldWithAddList from '@Presentational/FieldWithAddList/FieldWithAddList';
import ItemContentVacancyAddWithList from '@Presentational/ItemContentVacancyAddWithList/ItemContentVacancyAddWithList';

import { MenuItem } from '@material-ui/core';
import ListAddedElement from '@Container/ListAddedElement/ListAddedElement';
import { Button } from '@material-ui/core';
import SalaryInput from '@Presentational/SalaryInput/SalaryInput';

const CreateVacancyContent = ({ toggleMenuClass }: ComponentWithLeftMenu) => {
    const [title, setTitle] = useState('');
    const [telephone, setTelephone] = useState('');
    const [address, setAddress] = useState('');

    const [aboutYourSelf, setAboutYourSelf] = useState('');

    const [currentExperience, setCurrentExperience] = useState(experience[0]);

    const [currentProfessionType, setCurrentProfessionType] = useState(
        categoryMusician[0].type
    );
    const [currentProfessionDescription, setCurrentProfessionDescription] =
        useState(categoryMusician[0].description);

    const [skill, setSkill] = useState('');

    const [listSkills, setLitsSkills] = useState<
        Array<{ id: number; skill: string }>
    >([]);

    const [quality, setQuality] = useState('');

    const [listQuality, setListQuality] = useState<
        Array<{
            id: number;
            quality: string;
        }>
    >([]);

    const [requirement, setRequirement] = useState('');

    const [listRequirement, setListRequirement] = useState<
        Array<{
            id: number;
            requirement: string;
        }>
    >([]);

    const [willPlus, setWillPlus] = useState('');

    const [listWillPlus, setListWillPlus] = useState<
        Array<{
            id: number;
            willPlus: string;
        }>
    >([]);

    const [responsibillity, setResponsibillity] = useState('');

    const [listResponsibillity, setListResponsibillity] = useState<
        Array<{
            id: number;
            responsibillity: string;
        }>
    >([]);

    const [offer, setOffer] = useState('');

    const [listOffer, setListOffer] = useState<
        Array<{
            id: number;
            offer: string;
        }>
    >([]);

    const [conditions, setConditions] = useState('');

    const [listConditions, setListConditions] = useState<
        Array<{
            id: number;
            conditions: string;
        }>
    >([]);

    const [currency, setCurrency] = useState('EUR');
    const [salaryStart, setSalaryStart] = useState('');
    const [salaryEnd, setEndStart] = useState('');
    return (
        <div className={`CreateVacancyContent MainContent ${toggleMenuClass}`}>
            <Typography variant='h2'>Создание вакансии</Typography>

            <div className='wrapper'>
                <div className='image'>
                    <input className='input-file' hidden type='file' />
                    <svg className='wrapper-react'>
                        <rect rx='20' />
                    </svg>
                    <div className='inner'>
                        <img src='/assets/load/upload.png' alt='upload icon' />
                        <Typography variant='h5'>
                            Загрузка фотографии
                        </Typography>
                    </div>
                </div>
                <div className='content'>
                    <Row>
                        <div className='content-item'>
                            <Typography variant='h5'>
                                Основная информация
                            </Typography>
                            <div className='wrapper wrapper-action'>
                                <Field
                                    title='Заголовок:'
                                    placeholder='Гитарист в группу Metallica'
                                    label='Главный заголовок вакансии'
                                    currentValue={title}
                                    handleOnChange={(e) =>
                                        setTitle(e.target.value)
                                    }
                                    handleClearValue={() => setTitle('')}
                                    classNameLeftText='vacancy-half'
                                />
                                <Field
                                    description='Можно указать зарплатную вилку или стартовую зарплату'
                                    title='Зарплата:'
                                >
                                    <SalaryInput
                                        currency={currency}
                                        salaryStart={salaryStart}
                                        salaryEnd={salaryEnd}
                                        handleChangeCurrency={(e) =>
                                            setCurrency(e.target.value)
                                        }
                                        handleChangeSalaryStart={(e) =>
                                            setSalaryStart(e.target.value)
                                        }
                                        handleChangeSalaryEnd={(e) =>
                                            setEndStart(e.target.value)
                                        }
                                    />
                                </Field>
                                <Row>
                                    <Field
                                        title='Опыт работы:'
                                        classNameLeftText='vacancy-half'
                                    >
                                        <FieldSelect
                                            dropDownList={experience}
                                            selectKey={currentExperience}
                                            render={(item, index) => (
                                                <MenuItem
                                                    key={index}
                                                    value={item}
                                                >
                                                    {item}
                                                </MenuItem>
                                            )}
                                            dataHandleChange={(item) => {
                                                setCurrentExperience(item);
                                            }}
                                        />
                                    </Field>
                                    <Field
                                        title='Профессия: '
                                        classNameLeftText='vacancy-half'
                                    >
                                        <FieldSelect
                                            dropDownList={categoryMusician}
                                            selectKey={currentProfessionType}
                                            render={(item, index) => (
                                                <MenuItem
                                                    key={index}
                                                    value={item.type}
                                                >
                                                    {item.description}
                                                </MenuItem>
                                            )}
                                            dataHandleChange={(
                                                key,
                                                findArray
                                            ) => {
                                                const social = findArray.find(
                                                    (item) => item.type === key
                                                );
                                                if (social) {
                                                    setCurrentProfessionType(
                                                        social.type
                                                    );
                                                    setCurrentProfessionDescription(
                                                        social.description
                                                    );
                                                }
                                            }}
                                        />
                                    </Field>
                                </Row>
                                <Row>
                                    <Field
                                        title='Телефон:'
                                        label='+7 (000) 000-00-00'
                                        placeholder='Введите ваш номер телефона'
                                        currentValue={telephone}
                                        handleOnChange={(e) =>
                                            setTelephone(e.target.value)
                                        }
                                        handleClearValue={() =>
                                            setTelephone('')
                                        }
                                        classNameLeftText='vacancy-half'
                                    />
                                    <Field
                                        title='Адресс:'
                                        label='Область, город, улица, дом'
                                        placeholder='New York NY Yaphank 2134 Wayback Lane 1b'
                                        currentValue={address}
                                        handleOnChange={(e) =>
                                            setAddress(e.target.value)
                                        }
                                        handleClearValue={() => setAddress('')}
                                        classNameLeftText='vacancy-half'
                                    />
                                </Row>
                            </div>
                        </div>
                        <div className='content-item description'>
                            <Typography variant='h5'>Описание</Typography>
                            <div className='wrapper wrapper-action'>
                                <textarea
                                    placeholder='О группе'
                                    value={aboutYourSelf}
                                    onChange={(
                                        e: ChangeEvent<HTMLTextAreaElement>
                                    ) => setAboutYourSelf(e.target.value)}
                                />
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <ItemContentVacancyAddWithList
                            title='Навыки'
                            description='Введите основные навыки которыми должен
                                    обладать ваш идеальный они будут
                                    представлены в виде тегов.'
                        >
                            <FieldWithAddList
                                label='Название навыка'
                                value={skill}
                                handleAdd={() => {
                                    setLitsSkills((prevSkills) => {
                                        const tmp = [
                                            ...prevSkills,
                                            {
                                                id: listSkills.length,
                                                skill: skill,
                                            },
                                        ];

                                        setSkill('');

                                        return tmp;
                                    });
                                }}
                                handleOnChange={(value) => setSkill(value)}
                                handleClearValue={() => setSkill('')}
                                listElements={listSkills}
                                render={(item, index) => (
                                    <Tag
                                        key={item.id}
                                        id={item.id}
                                        name={item.skill}
                                        handleDeleteElement={(id) => {
                                            setLitsSkills((prevSkills) =>
                                                prevSkills.filter(
                                                    (skill) => skill.id !== id
                                                )
                                            );
                                        }}
                                    />
                                )}
                            />
                        </ItemContentVacancyAddWithList>
                        <ItemContentVacancyAddWithList
                            title='Качества'
                            description='Набор качеств вашего идеального кандидата,
                                    будет представлен в виде тегов.'
                        >
                            <FieldWithAddList
                                label='Качество'
                                value={quality}
                                handleAdd={() => {
                                    setListQuality((prevQuality) => {
                                        const tmp = [
                                            ...prevQuality,
                                            {
                                                id: listQuality.length,
                                                quality: quality,
                                            },
                                        ];

                                        setQuality('');

                                        return tmp;
                                    });
                                }}
                                handleOnChange={(value) => setQuality(value)}
                                handleClearValue={() => setQuality('')}
                                listElements={listQuality}
                                render={(item, index) => (
                                    <Tag
                                        key={item.id}
                                        id={item.id}
                                        name={item.quality}
                                        handleDeleteElement={(id) => {
                                            setListQuality((prevQuality) =>
                                                prevQuality.filter(
                                                    (quality) =>
                                                        quality.id !== id
                                                )
                                            );
                                        }}
                                    />
                                )}
                            />
                        </ItemContentVacancyAddWithList>
                    </Row>
                    <Row>
                        <ItemContentVacancyAddWithList
                            title='Требования'
                            description='Требования от кандидата.'
                        >
                            <FieldWithAddList
                                label='Опишите требования'
                                value={requirement}
                                handleAdd={() => {
                                    setListRequirement((prevRequirement) => {
                                        const tmp = [
                                            ...prevRequirement,
                                            {
                                                id: listRequirement.length,
                                                requirement: requirement,
                                            },
                                        ];

                                        setRequirement('');

                                        return tmp;
                                    });
                                }}
                                handleOnChange={(value) =>
                                    setRequirement(value)
                                }
                                handleClearValue={() => setRequirement('')}
                                listElements={listRequirement}
                                render={(item, index) => (
                                    <Tag
                                        key={item.id}
                                        id={item.id}
                                        name={item.requirement}
                                        handleDeleteElement={(id) => {
                                            setListRequirement(
                                                (prevRequirement) =>
                                                    prevRequirement.filter(
                                                        (requirement) =>
                                                            requirement.id !==
                                                            id
                                                    )
                                            );
                                        }}
                                    />
                                )}
                            />
                        </ItemContentVacancyAddWithList>
                        <ItemContentVacancyAddWithList
                            title='Будет преимуществом'
                            description='Укажите какими преимуществами может обладать
                            кандидат. Это могут быть специфические
                            знания музыкальной теории или наличие нужных
                            инструментов.'
                        >
                            <FieldWithAddList
                                label='Преимущество'
                                value={willPlus}
                                handleAdd={() => {
                                    setListWillPlus((prevWillPlus) => {
                                        const tmp = [
                                            ...prevWillPlus,
                                            {
                                                id: listWillPlus.length,
                                                willPlus: willPlus,
                                            },
                                        ];

                                        setWillPlus('');

                                        return tmp;
                                    });
                                }}
                                handleOnChange={(value) => setWillPlus(value)}
                                handleClearValue={() => setWillPlus('')}
                                listElements={listWillPlus}
                                render={(item, index) => (
                                    <Tag
                                        key={item.id}
                                        id={item.id}
                                        name={item.willPlus}
                                        handleDeleteElement={(id) => {
                                            setListWillPlus((prevWillPlus) =>
                                                prevWillPlus.filter(
                                                    (willPlus) =>
                                                        willPlus.id !== id
                                                )
                                            );
                                        }}
                                    />
                                )}
                            />
                        </ItemContentVacancyAddWithList>
                    </Row>

                    <Row>
                        <ItemContentVacancyAddWithList
                            title='Обязанности'
                            description='Список обязанностей, которые будут возложены на кандидата'
                        >
                            {' '}
                            <FieldWithAddList
                                label='Обязанность'
                                value={responsibillity}
                                handleAdd={() => {
                                    setListResponsibillity(
                                        (prevResponsibillity) => {
                                            const tmp = [
                                                ...prevResponsibillity,
                                                {
                                                    id: listResponsibillity.length,
                                                    responsibillity:
                                                        responsibillity,
                                                },
                                            ];

                                            setResponsibillity('');

                                            return tmp;
                                        }
                                    );
                                }}
                                handleOnChange={(value) =>
                                    setResponsibillity(value)
                                }
                                handleClearValue={() => setResponsibillity('')}
                                listElements={listResponsibillity}
                                render={(item, index) => (
                                    <Tag
                                        key={item.id}
                                        id={item.id}
                                        name={item.responsibillity}
                                        handleDeleteElement={(id) => {
                                            setListResponsibillity(
                                                (prevResponsibillity) =>
                                                    prevResponsibillity.filter(
                                                        (responsibillity) =>
                                                            responsibillity.id !==
                                                            id
                                                    )
                                            );
                                        }}
                                    />
                                )}
                            />
                        </ItemContentVacancyAddWithList>
                        <ItemContentVacancyAddWithList
                            title='Предложения от группы'
                            description='Преимущества от группы: например каждый день
                            кофе на банановом молоке'
                        >
                            <FieldWithAddList
                                label='Преимущества работы с вами'
                                value={offer}
                                handleAdd={() => {
                                    setListOffer((prevListOffer) => {
                                        const tmp = [
                                            ...prevListOffer,
                                            {
                                                id: listOffer.length,
                                                offer: offer,
                                            },
                                        ];

                                        setOffer('');

                                        return tmp;
                                    });
                                }}
                                handleOnChange={(value) => setOffer(value)}
                                handleClearValue={() => setOffer('')}
                                listElements={listOffer}
                                render={(item, index) => (
                                    <Tag
                                        key={item.id}
                                        id={item.id}
                                        name={item.offer}
                                        handleDeleteElement={(id) => {
                                            setListOffer((prevListOffer) =>
                                                prevListOffer.filter(
                                                    (offer) => offer.id !== id
                                                )
                                            );
                                        }}
                                    />
                                )}
                            />
                        </ItemContentVacancyAddWithList>
                    </Row>
                    <ItemContentVacancyAddWithList
                        title='Условия'
                        description='Условия рыботы с вами например: оформление по тк
                                РФ или удаленная работа'
                    >
                        <FieldWithAddList
                            label='Условие'
                            value={conditions}
                            handleAdd={() => {
                                setListConditions((prevListConditioin) => {
                                    const tmp = [
                                        ...prevListConditioin,
                                        {
                                            id: listConditions.length,
                                            conditions: conditions,
                                        },
                                    ];

                                    setConditions('');

                                    return tmp;
                                });
                            }}
                            handleOnChange={(value) => setConditions(value)}
                            handleClearValue={() => setConditions('')}
                            listElements={listConditions}
                            render={(item, index) => (
                                <Tag
                                    key={item.id}
                                    id={item.id}
                                    name={item.conditions}
                                    handleDeleteElement={(id) => {
                                        setListConditions(
                                            (prevListConditioin) =>
                                                prevListConditioin.filter(
                                                    (condition) =>
                                                        condition.id !== id
                                                )
                                        );
                                    }}
                                />
                            )}
                        />
                    </ItemContentVacancyAddWithList>
                </div>
            </div>
            <Button
                variant='contained'
                color='secondary'
                className='save-published'
            >
                Сохранить и опубликовать
            </Button>
        </div>
    );
};

export default CreateVacancyContent;
