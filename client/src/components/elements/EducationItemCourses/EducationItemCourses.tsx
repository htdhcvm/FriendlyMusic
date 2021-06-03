import React, { useState, ChangeEvent, memo } from 'react';

import { Button, TextField } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';

import DateScope from '../DateScope/DateScope';
import { v4 as uuidv4 } from 'uuid';

import './EducationItemCourses.scss';

interface IListEducations {
    id: string;
    nameSchool: string;
    nameCourses: string;
    startDate: string;
    endDate: string;
}

interface FieldsForm {
    error: boolean;
    description: string;
    type: string;
}

type ItemEducationType = IListEducations & {
    handleDeleteItem: (id: string) => void;
};

const EducationItemCourses = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [nameSchool, setNameSchool] = useState('');
    const [nameCourses, setNameCourses] = useState('');
    const [listEducations, setListEducations] = useState<
        Array<IListEducations>
    >([]);

    const onChangeHandlerStart = (e: ChangeEvent<any>) => {
        setStartDate(e.target.value);
    };

    const onChangeHandlerEnd = (e: ChangeEvent<any>) => {
        setEndDate(e.target.value);
    };

    const createFormItemField = (name: string, type: string) => {
        return {
            error: false,
            description: name,
            type: type,
        };
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

    const handleAddEducation = () => {
        const fields = [
            createFormItemField(nameSchool, 'nameSchool'),
            createFormItemField(nameCourses, 'nameCourses'),
            createFormItemField(startDate, 'startDate'),
            createFormItemField(endDate, 'endDate'),
        ];
        if (checkOnEmpty(fields)) {
            setStartDate('');
            setEndDate('');
            setNameSchool('');
            setNameCourses('');
            return setListEducations((prev) => [
                ...prev,
                {
                    id: uuidv4(),
                    nameSchool,
                    nameCourses,
                    startDate,
                    endDate,
                },
            ]);
        }
    };

    const handleDeleteItem = (id: string) => {
        if (id)
            setListEducations(
                listEducations.filter((education) => education.id !== id)
            );
    };
    return (
        <div className="EducationItemCourses">
            <h4>Курсы</h4>
            <div className="educationItems">
                <div className="row">
                    <TextField
                        className="fieldItem"
                        type="text"
                        value={nameSchool}
                        onChange={(e) => setNameSchool(e.target.value)}
                        placeholder="Название школы"
                    />
                    <TextField
                        className="fieldItem"
                        type="text"
                        value={nameCourses}
                        onChange={(e) => setNameCourses(e.target.value)}
                        placeholder="Название курсов"
                    />
                </div>
                <div className="row">
                    <DateScope
                        start={startDate}
                        end={endDate}
                        onChangeHandlerStart={onChangeHandlerStart}
                        onChangeHandlerEnd={onChangeHandlerEnd}
                    />
                </div>
            </div>
            <div className="wrapperBtnAdd">
                <Button className="addBtn" onClick={handleAddEducation}>
                    Добавить
                </Button>
            </div>

            <div className="divider"></div>

            <div className="listEducation">
                {listEducations.map((education) => (
                    <ItemEducation
                        key={education.id}
                        id={education.id}
                        nameSchool={education.nameSchool}
                        nameCourses={education.nameCourses}
                        startDate={education.startDate}
                        endDate={education.endDate}
                        handleDeleteItem={handleDeleteItem}
                    />
                ))}
            </div>
        </div>
    );
};

const ItemEducation = memo(
    ({
        id,
        nameSchool,
        nameCourses,
        startDate,
        endDate,
        handleDeleteItem,
    }: ItemEducationType) => {
        return (
            <div className="ItemEducation">
                <div className="info">
                    <div className="date">
                        <span>{startDate.substr(0, 4)} - </span>
                        <span>{endDate.substr(0, 4)}</span>
                    </div>
                    <div className="text">
                        {`${nameSchool} `}
                        {`${nameCourses} `}
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

export default EducationItemCourses;
