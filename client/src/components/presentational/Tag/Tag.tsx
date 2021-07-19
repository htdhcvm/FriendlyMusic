import './Tag.scss';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

interface Prop<T, Q> {
    id: Q;
    name: T;
    handleDeleteElement?: (id: Q) => void;
}

function Tag<T, Q>({ id, name, handleDeleteElement }: Prop<T, Q>) {
    return (
        <div className='tag'>
            <span className='text'>{name}</span>{' '}
            {handleDeleteElement ? (
                <HighlightOffIcon
                    onClick={() => {
                        handleDeleteElement(id);
                    }}
                    className='icon-delete'
                />
            ) : null}
        </div>
    );
}

export default Tag;
