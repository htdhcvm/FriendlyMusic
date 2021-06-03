import React, { SyntheticEvent, ChangeEvent, useState } from 'react';

import './TabUserProfile.scss';

import SocialInputTag from '../SocialInputTag/SocialInputTag';
import InputWithTags from '../../InputWithTags/InputWithTags';
import BeforeWork from '../../BeforeWork/BeforeWork';
import EducationItem from '../../EducationItem/EducationItem';
import EducationItemCourses from '../../EducationItemCourses/EducationItemCourses';

import { languages } from '../../../../listsSelect/listLanguage';
import { proffesions } from '../../../../listsSelect/professions';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Button, TextareaAutosize, TextField } from '@material-ui/core';

import PhoneInput from 'react-phone-number-input';
// import * as EmailValidator from 'email-validator';

const TabUserProfile = (props: any) => {
    const { value, index } = props;
    const [ganderCheck, setGanderCheck] = useState<string>('male');
    const [language, setLanguage] = useState<string>('ru');
    const [birthday, setBirthday] = useState<string>('1990-01-01');
    const [telephoneCustomers, setTelephoneCustomers] = useState<string>('+7');
    const [profession, setProfession] = useState<string>('');
    const [professionExpirince, setProfessionExpirince] = useState<number>(1);
    const [timeExpression, setTimeExpression] = useState<string>('mounth');

    const handleUpdateUserData = (e: SyntheticEvent) => {
        e.preventDefault();
        console.log('update');
    };

    const generateListNumber = () => {
        let tmp = [];
        for (let i = 1; i <= 80; i++) {
            tmp.push(
                <MenuItem key={i} value={i}>
                    {i}
                </MenuItem>
            );
        }

        return tmp;
    };

    // const listNumber = generateListNumber().map((number) => <>{number}</>);

    return (
        <div hidden={value !== index}>
            <Box className="container-tab" p={3}>
                <div className="photo">
                    <div className="fake-avatar"></div>
                    <img className="avatar" alt="avatar"></img>
                    <Button
                        className="load-photo"
                        variant="contained"
                        component="label"
                    >
                        Загрузить фотографию
                        <input type="file" hidden />
                    </Button>
                    <Button
                        className="delete-photo"
                        variant="contained"
                        component="label"
                    >
                        Удалить
                    </Button>
                </div>
                <div className="divider"></div>
                <div className="main-info">
                    <form onSubmit={handleUpdateUserData}>
                        <Typography variant="h5">
                            Основная информация
                        </Typography>
                        <div className="main-info-form">
                            <div className="wrapper">
                                <div className="wrapper-field-info">
                                    <div className="description">
                                        <span className="sub-title-info-form">
                                            ФИО
                                            <span className="required">*</span>:
                                        </span>
                                    </div>
                                    <TextField className="fio" label="ФИО" />
                                </div>
                                <div className="wrapper-field-info">
                                    <div className="description">
                                        <span className="sub-title-info-form">
                                            Язык:
                                        </span>
                                    </div>
                                    <FormControl className="language-field">
                                        <Select
                                            value={language}
                                            onChange={(e: ChangeEvent<any>) =>
                                                setLanguage(e.target.value)
                                            }
                                        >
                                            {languages.map(
                                                (lang: {
                                                    name: string;
                                                    description: string;
                                                }) => (
                                                    <MenuItem
                                                        key={lang.name}
                                                        value={lang.name}
                                                    >
                                                        {lang.description}
                                                    </MenuItem>
                                                )
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="wrapper">
                                <div className="wrapper-field-info">
                                    <div className="description">
                                        <span className="sub-title-info-form">
                                            День рождения:
                                        </span>
                                    </div>
                                    <TextField
                                        type="date"
                                        value={birthday}
                                        className="birthday-fields"
                                        onChange={(e) =>
                                            setBirthday(e.target.value)
                                        }
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                                <div className="wrapper-field-info">
                                    <div className="description">
                                        <span className="sub-title-info-form">
                                            Пол:
                                        </span>
                                    </div>
                                    <FormControl component="fieldset">
                                        <RadioGroup
                                            value={ganderCheck}
                                            className="gander"
                                            onChange={(
                                                e: ChangeEvent<HTMLInputElement>
                                            ) => setGanderCheck(e.target.value)}
                                        >
                                            <FormControlLabel
                                                value="male"
                                                control={<Radio />}
                                                label="Мужской"
                                            />
                                            <FormControlLabel
                                                value="female"
                                                control={<Radio />}
                                                label="Женский"
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                        <Typography variant="h5">
                            Контактная информация
                        </Typography>
                        <div className="contact-info-form">
                            <div className="wrapper">
                                <div className="wrapper-field-info">
                                    <div className="description">
                                        <span>Телефон: </span>
                                    </div>

                                    <PhoneInput
                                        country="RU"
                                        placeholder="Enter phone number"
                                        value={telephoneCustomers}
                                        onChange={setTelephoneCustomers}
                                    />
                                </div>
                                <div className="wrapper-field-info">
                                    <div className="description">
                                        <span>Адресс: </span>
                                    </div>
                                    <TextField
                                        className="input-max"
                                        type="text"
                                    />
                                </div>
                            </div>

                            <div className="wrapper">
                                <div className="wrapper-field-info">
                                    <div className="description">
                                        <span>Почта: </span>
                                    </div>
                                    <TextField
                                        className="input-max"
                                        label="example@gmail.com"
                                        type="email"
                                    />
                                </div>
                                <div className="wrapper-field-info">
                                    <div className="description">
                                        <span>Соцсети: </span>
                                    </div>
                                    <SocialInputTag />
                                </div>
                            </div>

                            <div className="wrapper">
                                <div className="wrapper-field-info wrapper-field-info-half">
                                    <div className="description">
                                        <span>Сайта: </span>
                                    </div>
                                    <TextField
                                        className="input-max"
                                        type="text"
                                    />
                                </div>
                            </div>
                        </div>
                        <Typography variant="h5">
                            Профессиональная информация
                        </Typography>

                        <div className="professional-info-form">
                            <div className="wrapper">
                                <div className="wrapper-field-info">
                                    <div className="description">
                                        <span>Профессия: </span>
                                    </div>
                                    <FormControl>
                                        <Select
                                            value={profession}
                                            onChange={(e: ChangeEvent<any>) =>
                                                setProfession(e.target.value)
                                            }
                                        >
                                            {proffesions.map((profession) => (
                                                <MenuItem
                                                    key={profession.id}
                                                    value={profession.id}
                                                >
                                                    {profession.name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="wrapper-field-info">
                                    <div className="description">
                                        <span>Музыкальный инструмент: </span>
                                    </div>
                                    <TextField
                                        label="crafter md058"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="wrapper">
                                <div className="wrapper-field-info">
                                    <div className="description">
                                        <span>Музыкальная опыт: </span>
                                    </div>
                                    <FormControl className="number">
                                        <Select
                                            value={professionExpirince}
                                            onChange={(e: ChangeEvent<any>) => {
                                                console.log(e.target.value);
                                                setProfessionExpirince(
                                                    e.target.value
                                                );
                                            }}
                                        >
                                            {generateListNumber()}
                                        </Select>
                                    </FormControl>
                                    <FormControl>
                                        <Select
                                            value={timeExpression}
                                            onChange={(e: ChangeEvent<any>) => {
                                                console.log(e.target.value);
                                                setTimeExpression(
                                                    e.target.value
                                                );
                                            }}
                                        >
                                            <MenuItem value="mounth">
                                                Месяц / Месяца / Месяцев
                                            </MenuItem>
                                            <MenuItem value="yaer">
                                                Год / Года / Лет
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="wrapper-field-info"></div>
                            </div>
                            <div className="form-field about">
                                <span>Расскажите о себе: </span>
                                <TextareaAutosize
                                    rowsMax={4}
                                    placeholder="О себе"
                                />
                            </div>
                            <div className="wrapper">
                                <div className="wrapper-field-info">
                                    <InputWithTags
                                        title="Навыки:"
                                        placeholder="Название навыка"
                                        description="Введите основные навыки, которыми вы владеете они будут представлены в виде тегов"
                                    />
                                </div>
                                <div className="wrapper-field-info">
                                    <InputWithTags
                                        title="Качества:"
                                        placeholder="Качество"
                                        description="Набор выших качеств будут предствалены в виде тегов"
                                    />
                                </div>
                            </div>

                            <div className="form-field quality">
                                <BeforeWork />
                            </div>
                        </div>

                        <Typography variant="h5">Образование</Typography>

                        <div className="education-form">
                            <div className="wrapper">
                                <div className="wrapper-field-info">
                                    <EducationItem />
                                </div>
                                <div className="wrapper-field-info">
                                    <EducationItemCourses />
                                </div>
                            </div>
                        </div>
                        <div className="wrapperBtn">
                            <Button
                                className="btnUpdate"
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Обновить
                            </Button>
                        </div>
                    </form>
                </div>
            </Box>
        </div>
    );
};

export default TabUserProfile;
