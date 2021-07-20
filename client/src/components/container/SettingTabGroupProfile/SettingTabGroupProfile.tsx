import { PropTabs } from '@Types/component/TabSettings';

const SettingTabGroupProfile = ({ value, index }: PropTabs) => {
    return (
        <div hidden={value !== index} className='SettingTabGroupProfile'>
            <div className='left wrapper-image'></div>
            <div className='divider'></div>
            <div className='right main-content'></div>
        </div>
    );
};

export default SettingTabGroupProfile;
