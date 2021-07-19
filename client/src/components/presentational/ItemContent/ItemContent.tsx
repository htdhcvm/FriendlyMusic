import { Typography } from '@material-ui/core';
import { FunctionComponent, memo, useState } from 'react';

import './ItemContent.scss';

interface ContentProp {
    content: string | Array<string> | undefined;
    title: string;
}

const ItemContent = memo(({ content, title }: ContentProp) => {
    const [toggleRead, setToggleRead] = useState(false);

    if (content)
        return (
            <div className='itemContent'>
                <Typography variant='h4' className='title'>
                    {title}
                </Typography>
                {Array.isArray(content) ? (
                    content.map((item) => (
                        <Typography key={item} variant='body1'>
                            — {item[0].toUpperCase() + item.slice(1)}
                        </Typography>
                    ))
                ) : content.length < 200 ? (
                    <Typography variant='body1'>{content}</Typography>
                ) : (
                    <>
                        <Typography variant='body1'>
                            {content.substr(0, 500)}
                            {!toggleRead ? '...' : null}
                            {!toggleRead ? (
                                <span
                                    className='read-more'
                                    onClick={() => setToggleRead(true)}
                                >
                                    {' Читать далее'}
                                </span>
                            ) : null}
                            {toggleRead ? content.slice(500) : null}
                            {toggleRead ? (
                                <span
                                    className='read-more'
                                    onClick={() => setToggleRead(false)}
                                >
                                    {' Скрыть текст'}
                                </span>
                            ) : null}
                        </Typography>
                    </>
                )}
            </div>
        );
    return null;
});

export default ItemContent;
