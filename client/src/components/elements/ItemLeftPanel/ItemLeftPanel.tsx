import { SvgIconProps } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

interface ItemProp {
    Icon: (props: SvgIconProps) => JSX.Element;
    text: string;
    link?: string;
    action?: () => void;
}

const ItemLeftPanel = ({ Icon, text, link, action }: ItemProp) => {
    return (
        <>
            {link ? (
                <Link to={link} className="item">
                    <Icon />
                    <span className="text">{text}</span>
                </Link>
            ) : (
                <div className="item" onClick={action}>
                    <Icon />
                    <span className="text">{text}</span>
                </div>
            )}
        </>
    );
};

export default ItemLeftPanel;
