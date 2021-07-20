import { PropTabs } from '@Types/component/TabSettings';

const SettingTabGroupPhoto = ({ value, index }: PropTabs) => {
    return (
        <div hidden={value !== index} className='SettingTabGroupPhoto'>
            <h1>SettingTabGroupPhoto</h1>
        </div>
    );
};

export default SettingTabGroupPhoto;
