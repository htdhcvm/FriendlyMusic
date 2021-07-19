import { useState } from 'react';
import LeftTextForField from '../LeftTextForField/LeftTextForField';
import { FieldRadioProp } from '../../../types/component/Field';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import './FieldRadio.scss';

const FieldRadio = ({ title, description }: FieldRadioProp) => {
    const [value, setValue] = useState('male');

    return (
        <div className='FieldRadio'>
            <LeftTextForField title={title} description={description} />
            <RadioGroup
                className='RadioGroup'
                value={value}
                onChange={(event: any) => {
                    setValue(event.target.value);
                }}
            >
                <FormControlLabel
                    label='Мужской'
                    control={
                        <Radio
                            value='male'
                            name='radio-button-demo'
                            inputProps={{ 'aria-label': 'A' }}
                        />
                    }
                />
                <FormControlLabel
                    label='Женский'
                    control={
                        <Radio
                            value='female'
                            name='radio-button-demo'
                            inputProps={{ 'aria-label': 'A' }}
                        />
                    }
                />
            </RadioGroup>
        </div>
    );
};

export default FieldRadio;
