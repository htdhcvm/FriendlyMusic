import React, { useState, useEffect, memo, ChangeEvent } from 'react';
import { Button, TextField } from '@material-ui/core';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';
import DateScope from '@Presentational/DateScope/DateScope';

import { v4 as uuidv4 } from 'uuid';

import './BeforeWork.scss';

interface Field {
    checkField(): boolean;
    print(): void;
}

class NameWork implements Field {
    public field!: string;

    constructor() {
        this.field = '';
    }

    setField(fieldValue: string) {
        this.field = fieldValue;
    }

    checkField() {
        return this.field.trim().length > 0 ? true : false;
    }

    print() {
        console.log(this.field);
    }
}
class Position implements Field {
    public field!: string;

    constructor() {
        this.field = '';
    }

    setField(fieldValue: string) {
        this.field = fieldValue;
    }
    checkField() {
        return this.field.trim().length > 0 ? true : false;
    }
    print() {
        console.log(this.field);
    }
}
class Link implements Field {
    public field!: string;

    constructor() {
        this.field = '';
    }

    setField(fieldValue: string) {
        this.field = fieldValue;
    }
    checkField() {
        return this.field.trim().length > 0 ? true : false;
    }
    print() {
        console.log(this.field);
    }
}
class Date implements Field {
    public start!: string;
    public end!: string;

    constructor() {
        this.start = '';
        this.end = '';
    }

    setStart(fieldValue: string) {
        this.start = fieldValue;
    }
    setEnd(fieldValue: string) {
        this.end = fieldValue;
    }

    checkStart() {
        return this.start.trim().length > 0 ? true : false;
    }

    checkEnd() {
        return this.end.trim().length > 0 ? true : false;
    }

    checkField() {
        return this.start.trim().length > 0 && this.end.trim().length > 0
            ? true
            : false;
    }
    print() {
        console.log(this.start, this.end);
    }
}

const nameWork: NameWork = new NameWork();
const positionObject: Position = new Position();
const linkObject: Link = new Link();
const dateObject: Date = new Date();

const listFields: Array<Field> = [
    nameWork,
    positionObject,
    linkObject,
    dateObject,
];

interface PrevWork {
    id: string;
    name: string;
    position: string;
    link: string;
    dateStart: string;
    dateEnd: string;
}

type ItemWorkProps = PrevWork & { handleDeleteWork: (id: string) => void };

const BeforeWork = () => {
    const [name, setName] = useState<string>('');
    const [position, setPosition] = useState<string>('');
    const [link, setLink] = useState<string>('');
    const [start, setStart] = useState<string>('');
    const [end, setEnd] = useState<string>('');
    const [errorCheck, setErrorCheck] = useState<boolean>(false);

    const [listPrevWorks, setListPrevWorks] = useState<Array<PrevWork>>([]);

    const handleAddInListNewWork = () => {
        let mark = false;
        for (const iterator of listFields) {
            if (!iterator.checkField()) mark = true;
        }

        if (mark) return setErrorCheck(true);

        setListPrevWorks((prev) => [
            ...prev,
            {
                id: uuidv4(),
                name,
                position,
                link,
                dateStart: start,
                dateEnd: end,
            },
        ]);

        clearFields();
    };

    const clearFields = () => {
        setName('');
        setPosition('');
        setLink('');
        setStart('');
        setEnd('');
        nameWork.setField('');
        positionObject.setField('');
        linkObject.setField('');
        dateObject.setStart('');
        dateObject.setEnd('');
    };

    useEffect(() => {
        if (errorCheck) {
            setTimeout(() => {
                setErrorCheck(false);
            }, 4000);
        }
    }, [errorCheck]);

    const handleDeleteWork = (id: string) => {
        if (id) {
            setListPrevWorks(
                listPrevWorks.filter((prevWork) => prevWork.id !== id)
            );
        }
    };

    const onChangeHandlerStart = (e: ChangeEvent<any>) => {
        dateObject.setStart(e.target.value);
        setStart(e.target.value);
    };

    const onChangeHandlerEnd = (e: ChangeEvent<any>) => {
        dateObject.setEnd(e.target.value);
        setEnd(e.target.value);
    };

    return (
        <div className='BeforeWork'>
            <h4>Предыдущие места работы</h4>

            <div className='wrapper'>
                <TextField
                    className='item-text'
                    type='text'
                    {...(errorCheck && !nameWork.checkField()
                        ? { error: true }
                        : null)}
                    value={name}
                    onChange={(e) => {
                        nameWork.setField(e.target.value);
                        setName(e.target.value);
                    }}
                    placeholder='Название'
                />
                <TextField
                    className='item-text'
                    type='text'
                    {...(errorCheck && !positionObject.checkField()
                        ? { error: true }
                        : null)}
                    value={position}
                    onChange={(e) => {
                        positionObject.setField(e.target.value);
                        setPosition(e.target.value);
                    }}
                    placeholder='Должность'
                />
                <TextField
                    className='item-text'
                    type='text'
                    {...(errorCheck && !linkObject.checkField()
                        ? { error: true }
                        : null)}
                    value={link}
                    onChange={(e) => {
                        linkObject.setField(e.target.value);

                        setLink(e.target.value);
                    }}
                    placeholder='Ссылка'
                />
                <DateScope
                    start={start}
                    end={end}
                    onChangeHandlerStart={onChangeHandlerStart}
                    onChangeHandlerEnd={onChangeHandlerEnd}
                    errorCheckStart={
                        errorCheck && !dateObject.checkStart() ? true : false
                    }
                    errorCheckEnd={
                        errorCheck && !dateObject.checkEnd() ? true : false
                    }
                />
            </div>
            <Button
                variant='contained'
                onClick={handleAddInListNewWork}
                className='addPlaceWork'
            >
                Добавить место работы
            </Button>
            {listPrevWorks.length > 0 ? (
                <div className='listBeforeWork'>
                    <h4>Список предыдущих мест работы</h4>
                    {listPrevWorks.map((work) => (
                        <ItemWork
                            key={work.id}
                            id={work.id}
                            handleDeleteWork={handleDeleteWork}
                            name={work.name}
                            position={work.position}
                            link={work.link}
                            dateStart={work.dateStart}
                            dateEnd={work.dateEnd}
                        />
                    ))}
                </div>
            ) : null}
        </div>
    );
};

const ItemWork = memo(
    ({
        id,
        dateStart,
        dateEnd,
        name,
        position,
        link,
        handleDeleteWork,
    }: ItemWorkProps) => {
        return (
            <div className='item'>
                <div className='wrapper-text'>
                    <div className='text'>
                        <div className='date'>
                            <span>С {dateStart}</span>
                            <span> По {dateEnd}</span>
                        </div>

                        <div className='info'>
                            <span>Название компании: {name}</span>
                            <span> Должность: {position}</span> <br />
                            <span>Ссылка: {link}</span>
                        </div>
                    </div>
                    <IconButton
                        onClick={() => {
                            handleDeleteWork(id);
                        }}
                    >
                        <DeleteForeverIcon />
                    </IconButton>
                </div>

                <div className='divider'></div>
            </div>
        );
    }
);

export default BeforeWork;
