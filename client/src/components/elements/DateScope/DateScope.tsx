import React, { ChangeEvent } from 'react';

import { TextField } from '@material-ui/core';

import './DateScope.scss';

interface Props {
    onChangeHandlerStart: (e: ChangeEvent<any>) => void;
    onChangeHandlerEnd: (e: ChangeEvent<any>) => void;
    errorCheckStart?: boolean;
    errorCheckEnd?: boolean;
    start: string;
    end: string;
}

const DateScope = ({
    start,
    end,
    onChangeHandlerStart,
    onChangeHandlerEnd,
    errorCheckStart,
    errorCheckEnd,
}: Props) => {
    return (
        <div className="DateScope">
            <TextField
                type="date"
                label="Дата начала"
                className="dateStart"
                {...(errorCheckStart ? { error: true } : null)}
                value={start}
                onChange={onChangeHandlerStart}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                type="date"
                label="Дата конца"
                className="dateEnd"
                {...(errorCheckEnd ? { error: true } : null)}
                value={end}
                onChange={onChangeHandlerEnd}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </div>
    );
};

export default DateScope;
