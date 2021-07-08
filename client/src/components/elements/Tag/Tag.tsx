import './Tag.scss';

interface Prop {
    list: Array<string>;
}

const Tag = ({ list }: Prop) => {
    return (
        <div className="tags">
            {list.map((item) => {
                return (
                    <div key={item} className="tag">
                        {item}
                    </div>
                );
            })}
        </div>
    );
};

export default Tag;
