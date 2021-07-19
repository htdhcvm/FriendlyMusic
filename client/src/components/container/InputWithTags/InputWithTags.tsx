import React, { useState, memo } from 'react';

import './InputWithTags.scss';

import { v4 as uuidv4 } from 'uuid';

import { Input } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

interface Prop {
    description: string;
    title: string;
    placeholder: string;
}

type TagT = { id: string; name: string };

type TagComponent = TagT & { handleDeleteTag: (id: string) => void };

const InputWithTags = memo(({ title, description, placeholder }: Prop) => {
    const [inputValue, setInputValue] = useState('');
    const [listTags, setListTags] = useState<Array<TagT>>([]);

    const handleAddTag = () => {
        if (inputValue.trim().length > 0) {
            setListTags((prev) => [
                ...prev,
                { id: uuidv4(), name: inputValue },
            ]);
            setInputValue('');
        }
    };

    const handleDeleteTag = (id: string) => {
        if (id) {
            setListTags(listTags.filter((tag) => tag.id !== id));
        }
    };

    return (
        <div className='InputWithTags'>
            <div className='input-text'>
                <div className='text'>
                    <h4>{title}</h4>
                    <span className='description'>{description}</span>
                </div>
                <Input
                    type='text'
                    value={inputValue}
                    placeholder={placeholder}
                    onChange={(e) => setInputValue(e.target.value)}
                    endAdornment={
                        <IconButton onClick={handleAddTag}>
                            <AddIcon />
                        </IconButton>
                    }
                />
            </div>

            <div className='listTags'>
                {listTags.map((tag) => (
                    <Tag
                        key={tag.id}
                        id={tag.id}
                        name={tag.name}
                        handleDeleteTag={handleDeleteTag}
                    />
                ))}
            </div>
        </div>
    );
});

const Tag = memo(({ id, name, handleDeleteTag }: TagComponent) => {
    return (
        <div className='tag'>
            <span>{name}</span>
            <IconButton
                onClick={() => {
                    handleDeleteTag(id);
                }}
            >
                <HighlightOffIcon />
            </IconButton>
        </div>
    );
});

export default InputWithTags;
