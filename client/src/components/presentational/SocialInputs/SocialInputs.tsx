import './SocialInputs.scss';
import { ChangeEvent, ReactNode } from 'react';
import AddBtnForSelect from '../../elements/AddBtnForSelect/AddBtnForSelect';
import FieldSelect from '../FieldSelect/FieldSelect';
import { SocialSelect, Description, Type } from '../../../staticData/socials';
import Field from '../FieldText/FieldText';
import ListAddedElement from '../../elements/ListAddedElement/ListAddedElement';

import { MenuItem } from '@material-ui/core';

interface Prop<T> {
    children: ReactNode;
    listSocials: SocialSelect[];
    selectKey: Type;
    selectVal: Description;
    handleSelectChange?: (data: Type, findArray: SocialSelect[]) => void;
    valueLink: string;
    handleOnChangeSite: (value: ChangeEvent<HTMLInputElement>) => void;
    handleOnClearSite: () => void;
    handleAddSocialList: () => void;
    listAddedSocials: T[];
    render: (item: T, index: number) => ReactNode;
}
function SocialInputs<T>({
    children,
    listSocials,
    selectKey,
    selectVal,
    handleSelectChange,
    valueLink,
    handleOnChangeSite,
    handleOnClearSite,
    handleAddSocialList,
    listAddedSocials,
    render,
}: Prop<T>) {
    return (
        <div className='SocialInputs'>
            {children}
            <div className='wrapper'>
                <div className='wrapper-inputs'>
                    <FieldSelect
                        dropDownList={listSocials}
                        selectKey={selectKey}
                        selectVal={selectVal}
                        render={(item, index) => (
                            <MenuItem key={item.type + index} value={item.type}>
                                {item.description}
                            </MenuItem>
                        )}
                        dataHandleChange={handleSelectChange}
                    />
                    <Field
                        currentValue={valueLink}
                        handleOnChange={handleOnChangeSite}
                        handleClearValue={handleOnClearSite}
                        label='Ссылка'
                        placeholder='https://vk.com/friendlyMusic'
                    />
                    <AddBtnForSelect handleClickAdd={handleAddSocialList} />
                </div>
                <ListAddedElement
                    listElements={listAddedSocials}
                    render={render}
                />
            </div>
        </div>
    );
}

export default SocialInputs;
