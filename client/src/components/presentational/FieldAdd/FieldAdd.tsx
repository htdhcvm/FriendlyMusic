import './FieldAdd.scss';

import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import InputAdornment from '@material-ui/core/InputAdornment';
import { ChangeEvent, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';

interface Prop {
    hadndleAddElementLanguage: (language: string) => void;
}
const FieldAdd = ({ hadndleAddElementLanguage }: Prop) => {
    const [value, setValue] = useState('');

    return (
        <div className="FieldAdd">
            <TextField
                className="input"
                value={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setValue(e.target.value)
                }
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <IconButton
                                onClick={() => {
                                    if (value.length > 0)
                                        hadndleAddElementLanguage(value);
                                    setValue('');
                                }}
                            >
                                <AddIcon className="add-btn" />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    );
};

export default FieldAdd;
