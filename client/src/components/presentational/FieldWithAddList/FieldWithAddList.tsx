import React, { ReactNode } from 'react';

import WrapperFieldAdd from '@Presentational/WrapperFieldAdd/WrapperFieldAdd';
import ComponentWithAdd from '@Presentational/ComponentWithAdd/ComponentWithAdd';
import Field from '@Presentational/FieldText/FieldText';
import ListAddedElement from '@Container/ListAddedElement/ListAddedElement';

interface Prop<T, L> {
    label: string;
    value: T & string;
    handleAdd: () => void;
    handleOnChange: (value: string) => void;
    handleClearValue: () => void;
    listElements: L[];
    render: (item: L, index: number) => ReactNode;
}

function FieldWithAddList<T, L>({
    label,
    value,
    handleAdd,
    handleOnChange,
    handleClearValue,
    listElements,
    render,
}: Prop<T, L>) {
    return (
        <WrapperFieldAdd>
            <ComponentWithAdd handleAdd={handleAdd}>
                <Field
                    label={label}
                    currentValue={value}
                    handleOnChange={(e) => handleOnChange(e.target.value)}
                    handleClearValue={handleClearValue}
                />
            </ComponentWithAdd>
            <ListAddedElement listElements={listElements} render={render} />
        </WrapperFieldAdd>
    );
}

export default FieldWithAddList;
