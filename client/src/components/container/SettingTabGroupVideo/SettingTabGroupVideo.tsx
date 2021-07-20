import { PropTabs } from '@Types/component/TabSettings';

const SettingTabGroupVideo = ({ value, index }: PropTabs) => {
    return (
        <div hidden={value !== index} className='SettingTabGroupPhoto'>
            <h1>SettingTabGroupVideo</h1>
        </div>
    );
};

export default SettingTabGroupVideo;
