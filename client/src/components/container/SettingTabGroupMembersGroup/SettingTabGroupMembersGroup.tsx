import { PropTabs } from '@Types/component/TabSettings';

const SettingTabGroupMembersGroup = ({ value, index }: PropTabs) => {
    return (
        <div hidden={value !== index} className='SettingTabGroupMembersGroup'>
            <h1>SettingTabGroupMembersGroup</h1>
        </div>
    );
};

export default SettingTabGroupMembersGroup;
