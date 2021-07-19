import './FieldText.scss';
import { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { FieldTextProp } from '../../../types/component/Field';
import LeftTextForField from '../LeftTextForField/LeftTextForField';
import InputAdornment from '@material-ui/core/InputAdornment';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#ed215e',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#ed215e',
        },
    },
})(TextField);

function FieldText<T>({
    title,
    description,
    children,
    placeholder,
    label,
    currentValue,
    handleOnChange,
    handleClearValue,
    type,
}: FieldTextProp<T>) {
    const [deleteIcon, setDeleteIcon] = useState(false);
    useEffect(() => {
        if (currentValue !== undefined && currentValue.length > 0)
            setDeleteIcon(true);
        if (currentValue !== undefined && currentValue.length === 0)
            setDeleteIcon(false);
    }, [currentValue]);

    return (
        <div className='FieldText'>
            <LeftTextForField title={title} description={description} />
            {children ? (
                { ...children }
            ) : (
                <CssTextField
                    className='input-field'
                    placeholder={placeholder}
                    label={label}
                    value={currentValue}
                    onChange={handleOnChange}
                    {...(deleteIcon
                        ? {
                              InputProps: {
                                  endAdornment: (
                                      <InputAdornment position='start'>
                                          <HighlightOffIcon
                                              onClick={handleClearValue}
                                              className='delete'
                                          />
                                      </InputAdornment>
                                  ),
                              },
                          }
                        : null)}
                />
            )}
        </div>
    );
}

export default FieldText;
