import React from 'react';
import './Main.scss';

import { MainPageBuilder, Director } from '../../../factoryComponents/main';

const mainPageBuilder: MainPageBuilder = new MainPageBuilder();
const director: Director = new Director();

const Main = () => {
    const isAuth: boolean = false;

    isAuth
        ? director.constructAuth(mainPageBuilder)
        : director.constructNotAuth(mainPageBuilder);

    const { Header, Content, LeftPanel } = mainPageBuilder.getResult();
    return (
        <div className="Main">
            <Header />
            <Content />
            {LeftPanel ? <LeftPanel /> : null}
        </div>
    );
};

export default Main;
