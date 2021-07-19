import { useEffect, ReactNode } from 'react';

import './ListResumes.scss';
import { useAction } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import ItemResume from '../../presentational/ItemResume/ItemResume';

const ListResumes = () => {
    const { getListResumes } = useAction();

    useEffect(() => {
        getListResumes();
    }, []);

    const listResumes = useTypedSelector((state) => state.resumes.listResumes);

    const rows = (): Array<ReactNode> => {
        const rows: any = [];
        const tmp: Array<ReactNode> = [];

        listResumes.forEach((itemData: any, index: any) => {
            tmp.push(
                <ItemResume
                    id={itemData.id}
                    title={itemData.title}
                    image={itemData.image}
                    userName={itemData.userName}
                    date={itemData.date}
                    price={itemData.price}
                    key={itemData.id}
                />
            );
            if ((index + 1) % 5 === 0 && index) {
                rows.push(
                    <div key={itemData.id + '1'} className='row'>
                        {tmp.map((item) => item)}
                    </div>
                );
                tmp.length = 0;
            }
            if (listResumes.length - 1 === index) {
                rows.push(
                    <div key={itemData.id + '1'} className='row'>
                        {tmp.map((item) => item)}
                    </div>
                );
                tmp.length = 0;
            }
        });

        return rows;
    };
    return (
        <div className='ListResumes'>
            <h1>Резюме</h1>
            <div className='wrapper'>{rows()}</div>
        </div>
    );
};

export default ListResumes;
