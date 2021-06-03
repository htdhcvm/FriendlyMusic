import React from 'react';
import './Main.scss';

import { PageBuilder, Director } from '../../../factoryComponents/main';

const pageBuilderMain: PageBuilder = new PageBuilder();
const director: Director = new Director();

const Main = () => {
    const isAuth: boolean = true;

    isAuth
        ? director.constructAuthMain(pageBuilderMain)
        : director.constructNotAuthMain(pageBuilderMain);

    console.log(pageBuilderMain.getResult());
    const { Header, Content, LeftPanel } = pageBuilderMain.getResult();
    return (
        <div className="Main">
            {Header ? <Header /> : null}
            {Content ? <Content /> : null}
            {LeftPanel ? <LeftPanel /> : null}
        </div>
    );
};

export default Main;
