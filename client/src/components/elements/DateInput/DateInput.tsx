import { useState } from 'react';
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

interface Prop<T> {
    date: T & Date;
    handleOnChange: (date: MaterialUiPickersDate) => void;
}

function DateInput<T>({ date, handleOnChange }: Prop<T>) {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                variant='inline'
                className='time'
                format='MM/dd/yyyy'
                margin='normal'
                id='date-picker-inline'
                label='Дата'
                value={date}
                onChange={handleOnChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    );
}

export default DateInput;
