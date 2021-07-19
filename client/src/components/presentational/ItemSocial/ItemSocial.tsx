import { memo } from 'react';
import Social from '../../../types/Social';
import './ItemSocial.scss';

interface ItemSocialProp {
    data: Array<Social> | undefined | boolean;
    descriptionText: string;
}

const ItemSocial = ({ data, descriptionText }: ItemSocialProp) => {
    return (
        <div className='ItemSocial' key={descriptionText}>
            {data && typeof data === 'boolean' ? (
                data ? (
                    <span>Существует</span>
                ) : (
                    <span>Не существует</span>
                )
            ) : data && data.length > 0 ? (
                <>
                    <span className='description'>{descriptionText}</span>
                    <div className='listSocial'>
                        {data.map((social) => (
                            <a
                                href={social.link}
                                target='_blank'
                                key={social.name}
                            >
                                <img
                                    className='socialImage'
                                    src={social.image}
                                    alt='social'
                                />
                            </a>
                        ))}
                    </div>
                </>
            ) : null}
        </div>
    );
};

export default memo(ItemSocial);
