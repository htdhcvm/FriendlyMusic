import { ChangeEvent, ChangeEventHandler } from 'react';

export interface Field {
    title?: string;
    placeholder?: string;
    description?: string;
    label?: string;
}
export interface FieldTextProp<T> extends Field {
    children?: any;
    currentValue?: T & string;
    handleOnChange?: (value: ChangeEvent<HTMLInputElement>) => void;
    handleClearValue?: () => void;
    type?: string;
}

export interface FieldSelectProp extends Field {
    list: Array<string>;
}

export interface FieldAddProp extends Field {
    listTags?: Array<string>;
}

export interface FieldRadioProp extends Field {}
