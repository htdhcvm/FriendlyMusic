import './FieldSelect.scss';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

import { memo, ReactNode, FunctionComponent } from 'react';

interface Prop<T, IK, IV> {
    dropDownList: T[];
    selectKey: IK;
    render: (item: T, index: number) => ReactNode;
    selectVal?: IV;
    dataHandleChange?: (data: IK, findArray: T[]) => void;
    className?: string;
}

function FieldSelect<T, IK, IV>({
    dropDownList,
    selectKey,
    selectVal,
    render,
    dataHandleChange,
    className,
}: Prop<T, IK, IV>): JSX.Element {
    const handleChange = (e: any): void => {
        if (dataHandleChange) {
            dataHandleChange(e.target.value, dropDownList);
        }
    };
    return (
        <FormControl className={`FieldSelect ${className}`}>
            <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                className='drop-down-select'
                value={selectKey}
                onChange={handleChange}
            >
                {dropDownList
                    ? dropDownList.map((item: T, index) => render(item, index))
                    : null}
            </Select>
        </FormControl>
    );
}

export default memo(FieldSelect) as typeof FieldSelect;
