import { useState } from 'react';
import './DateFork.scss';
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

interface Prop {
    startDate: Date;
    endDate: Date;
    handleChangeStart: (e: MaterialUiPickersDate) => void;
    handleChangeEnd: (e: MaterialUiPickersDate) => void;
}

const DateFork = ({
    startDate,
    endDate,
    handleChangeStart,
    handleChangeEnd,
}: Prop) => {
    return (
        <div className='DateFork'>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div className='time-wrapper'>
                    <KeyboardDatePicker
                        variant='inline'
                        className='time'
                        format='MM/dd/yyyy'
                        margin='normal'
                        id='date-picker-inline'
                        label='Дата начала'
                        value={startDate}
                        onChange={handleChangeStart}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardDatePicker
                        variant='inline'
                        className='time'
                        format='MM/dd/yyyy'
                        margin='normal'
                        id='date-picker-inline'
                        label='Дата конца'
                        value={endDate}
                        onChange={handleChangeEnd}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </div>
            </MuiPickersUtilsProvider>
        </div>
    );
};

export default DateFork;
