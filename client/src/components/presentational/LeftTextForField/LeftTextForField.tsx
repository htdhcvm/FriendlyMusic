import './LeftTextForField.scss';

import { ILeftTextForField } from '@Types/component/Field';

function LeftTextForField<T>({
    title,
    description,
    className,
}: ILeftTextForField<T>) {
    return (
        <>
            {title ? (
                <div className={`LeftTextForField ${className}`}>
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
