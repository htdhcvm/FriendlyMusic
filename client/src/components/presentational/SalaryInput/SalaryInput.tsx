import './SalaryInput.scss';

import TextField from '@material-ui/core/TextField';
import { ChangeEvent, useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import currencies from '../../../staticData/currencies';
import Typography from '@material-ui/core/Typography';

interface Prop<T> {
    currency: T;
    salaryStart: T;
    salaryEnd: T;
    handleChangeCurrency: (e: ChangeEvent<HTMLInputElement>) => void;
    handleChangeSalaryStart: (e: ChangeEvent<HTMLInputElement>) => void;
    handleChangeSalaryEnd: (e: ChangeEvent<HTMLInputElement>) => void;
}

function SalaryInput<T>({
    currency,
    salaryStart,
    salaryEnd,
    handleChangeCurrency,
    handleChangeSalaryStart,
    handleChangeSalaryEnd,
}: Prop<T>) {
    const [errorSalary, setErrorSalary] = useState(false);

    return (
        <div className='SalaryInput'>
            <TextField
                className='change-volute'
                select
                value={currency}
                onChange={handleChangeCurrency}
            >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <div className='wrapper-salary'>
                <Typography variant='body1'>От:</Typography>
                <TextField
                    value={salaryStart}
                    onChange={handleChangeSalaryStart}
                    onBlur={() =>
                        +salaryStart > +salaryEnd
                            ? setErrorSalary(true)
                            : setErrorSalary(false)
                    }
                    className='salary'
                    type='number'
                />
                <Typography variant='body1'>До:</Typography>
                <TextField
                    error={errorSalary ? true : false}
                    value={salaryEnd}
                    onBlur={() =>
                        +salaryStart > +salaryEnd
                            ? setErrorSalary(true)
                            : setErrorSalary(false)
                    }
                    onChange={handleChangeSalaryEnd}
                    className='salary'
                    type='number'
                />
            </div>
        </div>
    );
}

export default SalaryInput;
