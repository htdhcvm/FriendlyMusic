import { PropTabs } from '@Types/component/TabSettings';

const SettingTabGroupCreation = ({ value, index }: PropTabs) => {
    return (
        <div hidden={value !== index} className='SettingTabGroupCreation'>
            <h1>SettingTabGroupCreation</h1>
        </div>
    );
};

export default SettingTabGroupCreation;
