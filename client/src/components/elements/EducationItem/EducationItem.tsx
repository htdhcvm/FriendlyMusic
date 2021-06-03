import React, { useState, ChangeEvent, memo, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { Button, TextField } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';

import DateScope from '../DateScope/DateScope';

import './EducationItem.scss';

interface IListEducations {
    id: string;
    name: string;
    type: string;
    faculty: string;
    dateStart: string;
    dateEnd: string;
}

interface FieldsForm {
    error: boolean;
    description: string;
    type: string;
}

type ItemEducationType = IListEducations & {
    handleDeleteItem: (id: string) => void;
};

const EducationItem = () => {
    const [type, setType] = useState('Бакалавр');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [name, setName] = useState('');
    const [faculty, setFaculty] = useState('');

    const [typeError, setTypeError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [facultyError, setFacultyError] = useState(false);
    const [startError, setStartError] = useState(false);
    const [endError, setEndError] = useState(false);

    const [listEducations, setListEducations] = useState<
        Array<IListEducations>
    >([]);

    const onChangeHandlerStart = (e: ChangeEvent<any>) => {
        setStart(e.target.value);
    };

    const onChangeHandlerEnd = (e: ChangeEvent<any>) => {
        setEnd(e.target.value);
    };

    const checkOnEmpty = (arr: Array<FieldsForm>): boolean => {
        let tmp = true;
        for (const iterator of arr) {
            if (iterator.description.trim().length === 0) {
                tmp = false;
                iterator.error = true;
            }
        }

        return tmp;
    };

    const handleError = (arr: Array<FieldsForm>) => {
        for (const iterator of arr) {
            if (iterator.type === 'name' && iterator.error) setNameError(true);
            if (iterator.type === 'faculty' && iterator.error)
                setFacultyError(true);
            if (iterator.type === 'type' && iterator.error) setTypeError(true);
            if (iterator.type === 'start' && iterator.error)
                setStartError(true);
            if (iterator.type === 'end' && iterator.error) setEndError(true);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setTypeError(false);
            setNameError(false);
            setFacultyError(false);
            setStartError(false);
            setEndError(false);
        }, 3500);

        return () => {
            console.log('clear');
        };
    }, [typeError, nameError, facultyError, startError, endError]);

    const createFormItemField = (name: string, type: string) => {
        return {
            error: false,
            description: name,
            type: type,
        };
    };

    const handleAddEducation = () => {
        const params = [
            createFormItemField(name, 'name'),
            createFormItemField(faculty, 'faculty'),
            createFormItemField(type, 'type'),
            createFormItemField(start, 'start'),
            createFormItemField(end, 'end'),
        ];

        if (checkOnEmpty(params)) {
            setStart('');
            setEnd('');
            setName('');
            setFaculty('');
            return setListEducations((prev) => [
                ...prev,
                {
                    id: uuidv4(),
                    name,
                    type,
                    faculty,
                    dateStart: start,
                    dateEnd: end,
                },
            ]);
        }

        handleError(params);
    };

    const handleDeleteItem = (id: string) => {
        if (id) {
            setListEducations(
                listEducations.filter(
                    (educationItem) => educationItem.id !== id
                )
            );
        }
    };

    return (
        <div className="EducationItem">
            <h4>Государственные учреждения</h4>
            <div className="row">
                <TextField
                    className="item-text-field"
                    value={name}
                    {...(nameError ? { error: true } : null)}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Название университета"
                />
                <FormControl className="item-text-field">
                    <Select
                        value={type}
                        {...(typeError ? { error: true } : null)}
                        onChange={(e: ChangeEvent<any>) =>
                            setType(e.target.value)
                        }
                    >
                        <MenuItem value="Бакалавр">Бакалавр</MenuItem>
                        <MenuItem value="Магистр">Магистр</MenuItem>
                        <MenuItem value="Специалитет">Специалитет</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="row">
                <TextField
                    className="item-text-field"
                    value={faculty}
                    {...(facultyError ? { error: true } : null)}
                    onChange={(e) => setFaculty(e.target.value)}
                    placeholder="Название факультета"
                />

                <DateScope
                    start={start}
                    end={end}
                    onChangeHandlerStart={onChangeHandlerStart}
                    onChangeHandlerEnd={onChangeHandlerEnd}
                    errorCheckStart={startError}
                    errorCheckEnd={endError}
                />
            </div>

            <div className="wrapperBtnAddEducation">
                <Button onClick={handleAddEducation} className="addButton">
                    Добавить
                </Button>
            </div>
            <div className="divider"></div>

            {listEducations.length > 0 ? (
                <div className="listEducations">
                    {listEducations.map((education) => (
                        <ItemEducation
                            key={education.id}
                            id={education.id}
                            name={education.name}
                            type={education.type}
                            faculty={education.faculty}
                            dateStart={education.dateStart}
                            dateEnd={education.dateEnd}
                            handleDeleteItem={handleDeleteItem}
                        />
                    ))}
                </div>
            ) : null}
        </div>
    );
};

const ItemEducation = memo(
    ({
        id,
        name,
        type,
        faculty,
        dateStart,
        dateEnd,
        handleDeleteItem,
    }: ItemEducationType) => {
        return (
            <div className="ItemEducation">
                <div className="info">
                    <div className="date">
                        <span>{dateStart.substr(0, 4)} - </span>
                        <span>{dateEnd.substr(0, 4)}</span>
                    </div>
                    <div className="text">
                        {`${name} `}
                        {`${faculty} `}
                        {`${type} `}
                    </div>
                </div>
                <IconButton
                    onClick={() => {
                        handleDeleteItem(id);
                    }}
                >
                    <DeleteForeverIcon />
                </IconButton>
            </div>
        );
    }
);

export default EducationItem;
