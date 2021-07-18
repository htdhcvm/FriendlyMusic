import './TabUserMedia.scss';

const TabUserMedia = (props: any) => {
    const { value, index } = props;
    return (
        <div hidden={value !== index} className="TabUserMedia">
            <h1>TabUserMedia</h1>
        </div>
    );
};

export default TabUserMedia;
