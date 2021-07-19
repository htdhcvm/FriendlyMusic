import { memo } from 'react';
import Tag from '@Presentational/Tag/Tag';

import './ItemTextDescription.scss';

interface ItemTextDescriptionProp {
    data: string | undefined | Array<string> | boolean;
    descriptionText: string;
}
const ItemTextDescription = ({
    data,
    descriptionText,
}: ItemTextDescriptionProp) => {
    return (
        <div className='ItemTextDescription'>
            {typeof data === 'boolean' ? (
                data ? (
                    <>
                        <span className='description'>{descriptionText}</span>
                        <span className='text'>Да</span>
                    </>
                ) : (
                    <>
                        <span className='description'>{descriptionText}</span>
                        <span className='text'>Нет</span>
                    </>
                )
            ) : data && data.length > 0 ? (
                <>
                    <span className='description'>{descriptionText}</span>
                    {Array.isArray(data) ? (
                        <div className='list-tags'>
                            {data.map((item, index) => (
                                <Tag id={index} name={item} />
                            ))}
                        </div>
                    ) : (
                        <span className='text'>{data}</span>
                    )}
                </>
            ) : null}
        </div>
    );
};

export default ItemTextDescription;
