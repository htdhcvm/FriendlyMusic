import './ListAddedElement.scss';
import { ReactNode } from 'react';
import { memo } from 'react';

interface Prop<T> {
    listElements: T[];
    render: (item: T, index: number) => ReactNode;
    className?: string;
}

function ListAddedElement<T>({ listElements, render, className }: Prop<T>) {
    return (
        <div className={`ListAddedElement ${className}`}>
            {listElements.map((element, index) => render(element, index))}
        </div>
    );
}

export default memo(ListAddedElement) as typeof ListAddedElement;
