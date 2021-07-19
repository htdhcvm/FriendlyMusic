import AddBtnForSelect from '../AddBtnForSelect/AddBtnForSelect';

import { ReactNode } from 'react';

import './ComponentWithAdd.scss';

interface Prop {
    children: ReactNode;
    handleAdd: () => void;
}
function ComponentWithAdd({ children, handleAdd }: Prop) {
    return (
        <div className='ComponentWithAdd'>
            {children}
            <AddBtnForSelect handleClickAdd={handleAdd} />
        </div>
    );
}

export default ComponentWithAdd;
