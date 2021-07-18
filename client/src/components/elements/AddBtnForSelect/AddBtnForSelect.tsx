import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

import './AddBtnForSelect.scss';

interface Prop {
    handleClickAdd?: () => void;
}

const AddBtnForSelect = ({ handleClickAdd }: Prop) => {
    return (
        <IconButton onClick={handleClickAdd}>
            <AddIcon className="add-btn" />
        </IconButton>
    );
};

export default AddBtnForSelect;
