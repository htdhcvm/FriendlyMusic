import { SvgIconProps } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface ItemProp {
    Icon: (props: SvgIconProps) => JSX.Element;
    text: string;
    link?: string;
    action?: () => void;
    statusActive?: boolean;
}

const ItemLeftPanel = ({
    Icon,
    text,
    link,
    action,
    statusActive,
}: ItemProp) => {
    return (
        <>
            {link ? (
                <Link
                    to={link}
                    className={`item ${statusActive ? 'active' : ''}`}
                >
                    <Icon className="icon" />
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
