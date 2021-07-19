import './LeftTextForField.scss';

import { FieldTextProp } from '@Types/component/Field';

function LeftTextForField<T>({ title, description }: FieldTextProp<T>) {
    return (
        <>
            {title ? (
                <div className='LeftTextForField'>
                    <span className='title'>{title}</span>
                    <br />
                    {description ? (
                        <span className='description'>{description}</span>
                    ) : null}
                </div>
            ) : null}
        </>
    );
}
export default LeftTextForField;
