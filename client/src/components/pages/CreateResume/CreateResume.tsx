import './CreateResume.scss';
import { ChangeEvent, useState } from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';

import AuthHeader from '../../elements/AuthHeader/AuthHeader';
import LeftPanel from '../../elements/LeftPanel/LeftPanel';
import withToggleMenu from '../../hoc/withToggleMenu';
import ComponentWithLeftMenu from '../../../types/component/ComponentWithLeftMenu';

import DateInput from '../../elements/DateInput/DateInput';
import WrapperFieldAdd from '../../elements/WrapperFieldAdd/WrapperFieldAdd';
import ListAddedElement from '../../elements/ListAddedElement/ListAddedElement';
import Row from '../../elements/Row/Row';
import HalfRow from '../../presentational/HalfRow/HalfRow';
import DateFork from '../../elements/DateFork/DateFork';
import SalaryInput from '../../elements/SalaryInput/SalaryInput';

import Field from '../../presentational/FieldText/FieldText';
import FieldRadio from '../../presentational/FieldRadio/FieldRadio';
import FieldSelect from '../../presentational/FieldSelect/FieldSelect';

import ComponentWithAdd from '../../elements/ComponentWithAdd/ComponentWithAdd';
import SocialInputs from '../../presentational/SocialInputs/SocialInputs';
import LeftTextForField from '../../elements/LeftTextForField/LeftTextForField';
import Tag from '../../elements/Tag/Tag';

import categoryMusician from '../../../staticData/categoryMusician';
import socials from '../../../staticData/socials';
import expirenceResume from '../../../staticData/expirenceResume';
import qualifications from '../../../staticData/qualifications';
import { Description, Type } from '../../../staticData/socials';

import Qualification from '../../../types/Qualification';

import {
    CategoryType,
    CategoryDescription,
} from '../../../types/CategoryMusicians';

import { languages } from '../../../staticData/listLanguage';

const CreateResume = ({ toggleMenuClass }: ComponentWithLeftMenu) => {
    const [currentQulifaction, setCurrentQulification] = useState(
        qualifications[0]
    );

    const [nameUniversity, setNameUniversity] = useState('');
    const [nameFaculty, setNameFaculty] = useState('');
    const [dateStartEducation, setDateStartEducation] = useState<Date>(
        new Date('2000-01-01')
    );
    const [dateEndEducation, setDateEndEducation] = useState<Date>(
        new Date('2004-01-02')
    );

    type ListAddedEducation = {
        id: number;
        university: string;
        faculty: string;
        start: Date;
        end: Date;
        qualification: Qualification;
    };

    const [listAddedEducations, setListAddedEducations] = useState<
        Array<ListAddedEducation>
    >([]);

    const [nameSchool, setNameSchool] = useState('');
    const [nameCourses, setNameCourses] = useState('');
    const [dateStartCourses, setDateStartCourses] = useState<Date>(
        new Date('2000-01-01')
    );
    const [dateEndCourses, setDateEndCourses] = useState<Date>(
        new Date('2000-01-02')
    );

    type ListAddedCourses = {
        id: number;
        school: string;
        courses: string;
        start: Date;
        end: Date;
    };

    const [listAddedCourses, setListAddedCourses] = useState<
        Array<ListAddedCourses>
    >([]);

    const [aboutYourSelf, setAboutYourSelf] = useState<string>('');
    const [experience, setExperience] = useState<string>(expirenceResume[0]);

    const [currentSocialTypeSelected, setCurrentSocialTypeSelected] =
        useState<Type>(socials[0].type);

    const [
        currentSocialDescriptionSelected,
        setCurrentSocialDescriptionSelected,
    ] = useState<Description>(socials[0].description);

    type ListAddedSocials = {
        id: number;
        type: Type;
        description: Description;
        link: string;
    };

    const [listAddedSocials, setListAddedSocials] = useState<
        Array<ListAddedSocials>
    >([]);

    const [linkToSocial, setLinkToSocial] = useState<string>('');

    const [currentProfessionSelectedKey, setCurrentProfessionSelectedKey] =
        useState<CategoryType>(categoryMusician[0].type);

    const [currentProfessionSelectedValue, setCurrentProfessionSelectedValue] =
        useState<CategoryDescription>(categoryMusician[0].description);

    type ListAddedProfession = {
        id: number;
        type: CategoryType;
        description: CategoryDescription;
    };
    const [listAddedProfession, setListAddedProfession] = useState<
        Array<ListAddedProfession>
    >([]);

    const [currentLanguageSelectedKey, setCurrentLanguageSelectedKey] =
        useState(languages[0].name);

    const [currentLanguageSelectedValue, setCurrentLanguageSelectedValue] =
        useState(languages[0].description);

    type ListAddedLanguage = {
        id: number;
        description: string;
        name: string;
    };

    const [listAddedLanguage, setListAddedLanguage] = useState<
        Array<ListAddedLanguage>
    >([]);

    const [email, setEmail] = useState('');

    type ListAddedEmail = { id: number; email: string };
    const [listAddedEmail, setListAddedEmail] = useState<Array<ListAddedEmail>>(
        []
    );

    const [skills, setSkills] = useState('');
    type ListAddedSkills = { id: number; skill: string };
    const [listAdddedSkills, setListAddedSkills] = useState<
        Array<ListAddedSkills>
    >([]);

    const [quality, setQuality] = useState('');
    type ListAddedQuality = { id: number; quality: string };
    const [listAddedQuality, setListAddedQuality] = useState<
        Array<ListAddedQuality>
    >([]);

    const [title, setTitle] = useState('');
    const [dateBirthday, setDateBirthday] = useState(new Date('2000-01-01'));

    const [currency, setCurrency] = useState('EUR');
    const [salaryStart, setSalaryStart] = useState('');
    const [salaryEnd, setEndStart] = useState('');

    const [telephone, setTelephone] = useState('');
    const [address, setAddress] = useState('');

    return (
        <div className='CreateResume'>
            <AuthHeader />
            <LeftPanel />
            <div className={`MainContent ${toggleMenuClass}`}>
                <Typography className='title' variant='h2'>
                    Ваше резюме
                </Typography>
                <div className='content'>
                    <div className='image'>
                        <input className='input-file' hidden type='file' />
                        <svg className='wrapper-react'>
                            <rect rx='20' />
                        </svg>
                        <div className='inner'>
                            <img
                                src='/assets/load/upload.png'
                                alt='upload icon'
                            />
                            <Typography variant='body1'>
                                Загрузка фотографии
                            </Typography>
                        </div>
                    </div>
                    <div className='info'>
                        <div className='main-info item-content'>
                            <Typography variant='h5'>
                                Основная информация
                            </Typography>
                            <div className='list'>
                                <Row>
                                    <Field
                                        title='Заголовок:'
                                        placeholder='Ритм-гитарист'
                                        label='Название вакансии'
                                        currentValue={title}
                                        handleOnChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                        handleClearValue={() => setTitle('')}
                                    />
                                    <Field title='День рождения:'>
                                        <DateInput
                                            date={dateBirthday}
                                            handleOnChange={(value) => {
                                                setDateBirthday(value as Date);
                                            }}
                                        />
                                    </Field>
                                </Row>
                                <Row>
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
                                    <Field title='Язык:'>
                                        <WrapperFieldAdd>
                                            <ComponentWithAdd
                                                handleAdd={() => {
                                                    setListAddedLanguage(
                                                        (prev) => [
                                                            ...prev,
                                                            {
                                                                id: listAddedLanguage.length,
                                                                name: currentLanguageSelectedKey,
                                                                description:
                                                                    currentLanguageSelectedValue,
                                                            },
                                                        ]
                                                    );
                                                }}
                                            >
                                                <FieldSelect
                                                    dropDownList={languages}
                                                    selectKey={
                                                        currentLanguageSelectedKey
                                                    }
                                                    selectVal={
                                                        currentLanguageSelectedValue
                                                    }
                                                    render={(item, index) => (
                                                        <MenuItem
                                                            key={
                                                                item.description +
                                                                index
                                                            }
                                                            value={item.name}
                                                        >
                                                            {item.description}
                                                        </MenuItem>
                                                    )}
                                                    dataHandleChange={(
                                                        key,
                                                        findArray
                                                    ) => {
                                                        const item =
                                                            findArray.find(
                                                                (item) =>
                                                                    item.name ===
                                                                    key
                                                            );
                                                        if (item) {
                                                            setCurrentLanguageSelectedKey(
                                                                item.name
                                                            );
                                                            setCurrentLanguageSelectedValue(
                                                                item.description
                                                            );
                                                        }
                                                    }}
                                                />
                                            </ComponentWithAdd>

                                            <ListAddedElement
                                                listElements={listAddedLanguage}
                                                render={(item) => {
                                                    return (
                                                        <Tag
                                                            key={item.id}
                                                            id={item.id}
                                                            name={
                                                                item.description
                                                            }
                                                            handleDeleteElement={(
                                                                id
                                                            ) => {
                                                                setListAddedLanguage(
                                                                    (prev) =>
                                                                        prev.filter(
                                                                            (
                                                                                item
                                                                            ) =>
                                                                                item.id !==
                                                                                id
                                                                        )
                                                                );
                                                            }}
                                                        />
                                                    );
                                                }}
                                            />
                                        </WrapperFieldAdd>
                                    </Field>
                                </Row>
                                <Row>
                                    <Field
                                        title='Профессия:'
                                        description='Если нужного названия нету, то следует указать его в описании'
                                    >
                                        <WrapperFieldAdd>
                                            <ComponentWithAdd
                                                handleAdd={() => {
                                                    setListAddedProfession(
                                                        (prev) => [
                                                            ...prev,
                                                            {
                                                                id: listAddedProfession.length,
                                                                type: currentProfessionSelectedKey,
                                                                description:
                                                                    currentProfessionSelectedValue,
                                                            },
                                                        ]
                                                    );
                                                }}
                                            >
                                                <FieldSelect
                                                    dropDownList={
                                                        categoryMusician
                                                    }
                                                    selectKey={
                                                        currentProfessionSelectedKey
                                                    }
                                                    selectVal={
                                                        currentProfessionSelectedValue
                                                    }
                                                    dataHandleChange={(
                                                        key,
                                                        findArray
                                                    ) => {
                                                        const item =
                                                            findArray.find(
                                                                (item) =>
                                                                    item.type ===
                                                                    key
                                                            );
                                                        if (item) {
                                                            setCurrentProfessionSelectedKey(
                                                                item.type
                                                            );
                                                            setCurrentProfessionSelectedValue(
                                                                item.description
                                                            );
                                                        }
                                                    }}
                                                    render={(item, index) => (
                                                        <MenuItem
                                                            key={
                                                                item.description +
                                                                index
                                                            }
                                                            value={item.type}
                                                        >
                                                            {item.description}
                                                        </MenuItem>
                                                    )}
                                                />
                                            </ComponentWithAdd>
                                            <ListAddedElement
                                                listElements={
                                                    listAddedProfession
                                                }
                                                render={(item) => {
                                                    return (
                                                        <Tag
                                                            key={item.id}
                                                            id={item.id}
                                                            name={
                                                                item.description
                                                            }
                                                            handleDeleteElement={(
                                                                id
                                                            ) => {
                                                                setListAddedProfession(
                                                                    (prev) =>
                                                                        prev.filter(
                                                                            (
                                                                                item
                                                                            ) =>
                                                                                item.id !==
                                                                                id
                                                                        )
                                                                );
                                                            }}
                                                        />
                                                    );
                                                }}
                                            />
                                        </WrapperFieldAdd>
                                    </Field>
                                    <FieldRadio title='Пол: ' />
                                </Row>
                            </div>
                        </div>
                        <div className='contact-info item-content'>
                            <Typography variant='h5'>
                                Контактная информация
                            </Typography>
                            <div className='list'>
                                <Row>
                                    <Field
                                        title='Телефон:'
                                        label='+7 (110) 010-00-01'
                                        currentValue={telephone}
                                        handleOnChange={(e) =>
                                            setTelephone(e.target.value)
                                        }
                                        handleClearValue={() =>
                                            setTelephone('')
                                        }
                                    />
                                    <Field
                                        title='Адрес:'
                                        label='Область, город, улица, дом'
                                        placeholder='New York NY Yaphank 2134 Wayback Lane 1b'
                                        currentValue={address}
                                        handleOnChange={(e) =>
                                            setAddress(e.target.value)
                                        }
                                        handleClearValue={() => setAddress('')}
                                    />
                                </Row>
                                <Row>
                                    <WrapperFieldAdd>
                                        <ComponentWithAdd
                                            handleAdd={() => {
                                                setListAddedEmail((prev) => [
                                                    ...prev,
                                                    {
                                                        id: listAddedEmail.length,
                                                        email,
                                                    },
                                                ]);
                                                setEmail('');
                                            }}
                                        >
                                            <Field
                                                title='Почта:'
                                                placeholder='example@gmail.com'
                                                description='Есть возможность добавить несколько почтовых адресов'
                                                currentValue={email}
                                                handleOnChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                handleClearValue={() =>
                                                    setEmail('')
                                                }
                                            />
                                        </ComponentWithAdd>
                                        <ListAddedElement
                                            listElements={listAddedEmail}
                                            render={(item, index) => (
                                                <Tag
                                                    key={
                                                        item.email +
                                                        item.id +
                                                        index
                                                    }
                                                    id={item.id}
                                                    name={item.email}
                                                    handleDeleteElement={(
                                                        id
                                                    ) => {
                                                        setListAddedEmail(
                                                            (prev) =>
                                                                prev.filter(
                                                                    (email) =>
                                                                        email.id !==
                                                                        id
                                                                )
                                                        );
                                                    }}
                                                />
                                            )}
                                        />
                                    </WrapperFieldAdd>
                                    <SocialInputs
                                        listSocials={socials}
                                        selectKey={currentSocialTypeSelected}
                                        selectVal={
                                            currentSocialDescriptionSelected
                                        }
                                        handleSelectChange={(key, array) => {
                                            const socialTmp = array.find(
                                                (social) => social.type === key
                                            );
                                            if (socialTmp) {
                                                setCurrentSocialTypeSelected(
                                                    socialTmp.type
                                                );
                                                setCurrentSocialDescriptionSelected(
                                                    socialTmp.description
                                                );
                                            }
                                        }}
                                        valueLink={linkToSocial}
                                        handleOnChangeSite={(e) => {
                                            setLinkToSocial(e.target.value);
                                        }}
                                        handleOnClearSite={() => {
                                            setLinkToSocial('');
                                        }}
                                        handleAddSocialList={() => {
                                            setListAddedSocials((prev) => [
                                                ...prev,
                                                {
                                                    id: listAddedSocials.length,
                                                    type: currentSocialTypeSelected,
                                                    description:
                                                        currentSocialDescriptionSelected,
                                                    link: linkToSocial,
                                                },
                                            ]);
                                            setLinkToSocial('');
                                        }}
                                        listAddedSocials={listAddedSocials}
                                        render={(item, index) => (
                                            <Tag
                                                key={item.id}
                                                id={item.id}
                                                name={`${item.type}:${item.link}`}
                                                handleDeleteElement={(id) => {
                                                    setListAddedSocials(
                                                        (prev) =>
                                                            prev.filter(
                                                                (social) =>
                                                                    social.id !==
                                                                    id
                                                            )
                                                    );
                                                }}
                                            />
                                        )}
                                    >
                                        <LeftTextForField
                                            title='Соцсети:'
                                            description='При выборе нужно выбрать тип социальной сети и добавить ссылку'
                                        />
                                    </SocialInputs>
                                </Row>
                                <HalfRow>
                                    <Field title='Опыт работы:'>
                                        <FieldSelect
                                            dropDownList={expirenceResume}
                                            selectKey={experience}
                                            render={(item, index) => (
                                                <MenuItem
                                                    key={item + index}
                                                    value={item}
                                                >
                                                    {item}
                                                </MenuItem>
                                            )}
                                            dataHandleChange={(item) => {
                                                setExperience(item);
                                            }}
                                        />
                                    </Field>
                                </HalfRow>
                            </div>
                        </div>
                        <div className='about-yourself item-content'>
                            <Typography variant='h5'>О себе</Typography>
                            <span className='description'>
                                Информацию которая не относится к вашей
                                профессиональной деятельности лучше опустить
                            </span>
                            <textarea
                                value={aboutYourSelf}
                                onChange={(
                                    e: ChangeEvent<HTMLTextAreaElement>
                                ) => setAboutYourSelf(e.target.value)}
                                className='text'
                                placeholder='Расскажите о себе'
                            />
                        </div>
                        <Row>
                            <div className='skills item-content'>
                                <Typography variant='h5'>Навыки</Typography>
                                <span className='description'>
                                    Введите основные навыки которыми вы владеете
                                    они будут представлены в виде тегов
                                </span>
                                <WrapperFieldAdd>
                                    <ComponentWithAdd
                                        handleAdd={() => {
                                            setListAddedSkills((prev) => [
                                                ...prev,
                                                {
                                                    id: listAdddedSkills.length,
                                                    skill: skills,
                                                },
                                            ]);
                                            setSkills('');
                                        }}
                                    >
                                        <Field
                                            placeholder='Название навыка'
                                            currentValue={skills}
                                            handleOnChange={(e) =>
                                                setSkills(e.target.value)
                                            }
                                            handleClearValue={() =>
                                                setSkills('')
                                            }
                                        />
                                    </ComponentWithAdd>
                                    <ListAddedElement
                                        listElements={listAdddedSkills}
                                        render={(item, index) => (
                                            <Tag
                                                key={
                                                    item.skill + item.id + index
                                                }
                                                id={item.id}
                                                name={item.skill}
                                                handleDeleteElement={(id) => {
                                                    setListAddedSkills((prev) =>
                                                        prev.filter(
                                                            (skill) =>
                                                                skill.id !== id
                                                        )
                                                    );
                                                }}
                                            />
                                        )}
                                    />
                                </WrapperFieldAdd>
                            </div>
                            <div className='quality item-content'>
                                <Typography variant='h5'>Качества</Typography>
                                <span className='description'>
                                    Ваши лучшие качества они будут представлены
                                    в виде тегов
                                </span>
                                <WrapperFieldAdd>
                                    <ComponentWithAdd
                                        handleAdd={() => {
                                            setListAddedQuality((prev) => [
                                                ...prev,
                                                {
                                                    id: listAddedQuality.length,
                                                    quality,
                                                },
                                            ]);
                                            setQuality('');
                                        }}
                                    >
                                        <Field
                                            placeholder='Качество'
                                            currentValue={quality}
                                            handleOnChange={(e) =>
                                                setQuality(e.target.value)
                                            }
                                            handleClearValue={() =>
                                                setQuality('')
                                            }
                                        />
                                    </ComponentWithAdd>
                                    <ListAddedElement
                                        listElements={listAddedQuality}
                                        render={(item, index) => (
                                            <Tag
                                                key={
                                                    item.quality +
                                                    item.id +
                                                    index
                                                }
                                                id={item.id}
                                                name={item.quality}
                                                handleDeleteElement={(id) => {
                                                    setListAddedQuality(
                                                        (prev) =>
                                                            prev.filter(
                                                                (qual) =>
                                                                    qual.id !==
                                                                    id
                                                            )
                                                    );
                                                }}
                                            />
                                        )}
                                    />
                                </WrapperFieldAdd>
                            </div>
                        </Row>
                        <Row>
                            <div className='education item-content'>
                                <Typography variant='h5'>
                                    Образование
                                </Typography>
                                <div className='list'>
                                    <Row>
                                        <Field
                                            placeholder='МГТУ им. Н. Э. Баумана'
                                            label='Название университета'
                                            currentValue={nameUniversity}
                                            handleOnChange={(e) =>
                                                setNameUniversity(
                                                    e.target.value
                                                )
                                            }
                                            handleClearValue={() =>
                                                setNameUniversity('')
                                            }
                                        />
                                        <Field
                                            placeholder='Информационные системы и технологии'
                                            label='Название факультета'
                                            currentValue={nameFaculty}
                                            handleOnChange={(e) =>
                                                setNameFaculty(e.target.value)
                                            }
                                            handleClearValue={() =>
                                                setNameFaculty('')
                                            }
                                        />
                                    </Row>

                                    <FieldSelect
                                        dropDownList={qualifications}
                                        selectKey={currentQulifaction}
                                        render={(item, index) => (
                                            <MenuItem
                                                key={item + index}
                                                value={item}
                                            >
                                                {item}
                                            </MenuItem>
                                        )}
                                        dataHandleChange={(value) => {
                                            setCurrentQulification(value);
                                        }}
                                        className='education-select'
                                    />
                                    <DateFork
                                        startDate={dateStartEducation}
                                        endDate={dateEndEducation}
                                        handleChangeStart={(valueDate) =>
                                            setDateStartEducation(
                                                valueDate as Date
                                            )
                                        }
                                        handleChangeEnd={(valueDate) =>
                                            setDateEndEducation(
                                                valueDate as Date
                                            )
                                        }
                                    />
                                </div>
                                <Button
                                    variant='contained'
                                    color='secondary'
                                    className='button-add'
                                    onClick={() =>
                                        setListAddedEducations((prev) => [
                                            ...prev,
                                            {
                                                id: listAddedEducations.length,
                                                university: nameUniversity,
                                                faculty: nameFaculty,
                                                start: dateStartEducation,
                                                end: dateEndEducation,
                                                qualification:
                                                    currentQulifaction,
                                            },
                                        ])
                                    }
                                >
                                    Добавить
                                </Button>
                                <div className='devider'> </div>
                                <ListAddedElement
                                    listElements={listAddedEducations}
                                    className='education-list-added'
                                    render={(item, index) => (
                                        <div
                                            className='item-eduaction'
                                            key={item.id}
                                        >
                                            <span>{`${item.start.getFullYear()}-${item.end.getFullYear()}`}</span>
                                            <div className='main-text'>
                                                <span>{item.university}</span>
                                                <span>
                                                    {item.faculty}{' '}
                                                    <span>
                                                        {item.qualification}
                                                    </span>
                                                </span>
                                            </div>
                                            <IconButton
                                                onClick={() => {
                                                    setListAddedEducations(
                                                        (prev) =>
                                                            prev.filter(
                                                                (education) =>
                                                                    education.id !==
                                                                    item.id
                                                            )
                                                    );
                                                }}
                                            >
                                                <ClearIcon />
                                            </IconButton>
                                        </div>
                                    )}
                                />
                            </div>
                            <div className='courses item-content'>
                                <Typography variant='h5'>Курсы</Typography>
                                <div className='list'>
                                    <Row>
                                        <Field
                                            label='Название школы'
                                            placeholder='geekbrains'
                                            currentValue={nameSchool}
                                            handleOnChange={(e) =>
                                                setNameSchool(e.target.value)
                                            }
                                            handleClearValue={() =>
                                                setNameSchool('')
                                            }
                                        />
                                        <Field
                                            label='Название курсов'
                                            placeholder='Эстрадное пение'
                                            currentValue={nameCourses}
                                            handleOnChange={(e) =>
                                                setNameCourses(e.target.value)
                                            }
                                            handleClearValue={() =>
                                                setNameCourses('')
                                            }
                                        />
                                    </Row>
                                    <DateFork
                                        startDate={dateStartCourses}
                                        endDate={dateEndCourses}
                                        handleChangeStart={(value) =>
                                            setDateStartCourses(value as Date)
                                        }
                                        handleChangeEnd={(value) =>
                                            setDateEndCourses(value as Date)
                                        }
                                    />
                                </div>
                                <Button
                                    variant='contained'
                                    color='secondary'
                                    className='button-add'
                                    onClick={() => {
                                        setListAddedCourses((prev) => [
                                            ...prev,
                                            {
                                                id: listAddedCourses.length,
                                                school: nameSchool,
                                                courses: nameCourses,
                                                start: dateStartCourses,
                                                end: dateEndCourses,
                                            },
                                        ]);
                                    }}
                                >
                                    Добавить
                                </Button>
                                <div className='devider'></div>

                                <ListAddedElement
                                    listElements={listAddedCourses}
                                    render={(item, index) => (
                                        <div
                                            className='item-course'
                                            key={item.id}
                                        >
                                            <span>{`${item.start.getFullYear()}-${item.end.getFullYear()}`}</span>
                                            <div className='main-text'>
                                                <span>{item.school}</span>
                                                <span>{item.courses}</span>
                                            </div>
                                            <IconButton
                                                onClick={() => {
                                                    setListAddedCourses(
                                                        (prev) =>
                                                            prev.filter(
                                                                (courses) =>
                                                                    courses.id !==
                                                                    item.id
                                                            )
                                                    );
                                                }}
                                            >
                                                <ClearIcon />
                                            </IconButton>
                                        </div>
                                    )}
                                    className='list-added-courses'
                                />
                            </div>
                        </Row>
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
        </div>
    );
};

export default withToggleMenu({ Component: CreateResume });
