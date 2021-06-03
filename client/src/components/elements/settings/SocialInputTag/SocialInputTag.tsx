import React, { useState, ChangeEvent, memo } from 'react';

import { TextField } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import AddIcon from '@material-ui/icons/Add';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';

import { v4 as uuidv4 } from 'uuid';

import './SocialInputTag.scss';

const SocialInputTag = memo(() => {
    const [typeSocial, setTypeSocial] = useState<string>('');
    const [socialLink, setSocialLink] = useState<string>('');

    const [listTag, setListTag] = useState<
        Array<{ id: string; type: string; link: string }>
    >([]);

    const handleAddTag = () => {
        if (typeSocial.trim().length > 0 && socialLink.trim().length > 0) {
            setListTag((prevList) => [
                ...prevList,
                { id: uuidv4(), type: typeSocial, link: socialLink },
            ]);

            setTypeSocial('');
            setSocialLink('');
        }
    };

    const handleDeleteTag = (id: string) => {
        if (id) {
            const filter = listTag.filter((tag) => tag.id !== id);
            setListTag(filter);
        }
    };

    return (
        <div className="SocialInputTag">
            <div className="wrapper">
                <FormControl className="type">
                    <Select
                        value={typeSocial}
                        onChange={(e: ChangeEvent<any>) =>
                            setTypeSocial(e.target.value)
                        }
                    >
                        <MenuItem value="vk">vk</MenuItem>
                        <MenuItem value="inst">instagram</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    value={socialLink}
                    className="link"
                    placeholder="Ссылка"
                    onChange={(e: ChangeEvent<any>) =>
                        setSocialLink(e.target.value)
                    }
                />
                <IconButton className="button" onClick={handleAddTag}>
                    <AddIcon />
                </IconButton>
            </div>
            <div className="listTags">
                {listTag.map((tag) => (
                    <Tag
                        id={tag.id}
                        type={tag.type}
                        link={tag.link}
                        handleDeleteTag={handleDeleteTag}
                        key={tag.id}
                    />
                ))}
            </div>
        </div>
    );
});

const Tag = memo(
    ({
        id,
        type,
        link,
        handleDeleteTag,
    }: {
        id: string;
        type: string;
        link: string;
        handleDeleteTag: (id: string) => void;
    }) => {
        return (
            <div className="tag">
                <span className="text">
                    {type} : {link}
                </span>
                <HighlightOffIcon
                    onClick={() => {
                        handleDeleteTag(id);
                    }}
                />
            </div>
        );
    }
);

export default SocialInputTag;
