import React from 'react';
import Header from '../../elements/Header/Header';
import AuthHeader from '../../elements/AuthHeader/AuthHeader';
import LeftPanel from '../../elements/LeftPanel/LeftPanel';
import MainContent from '../../elements/MainContent/MainContent';
import AuthMainContent from '../../elements/AuthMainContent/AuthMainContent';
import './Main.scss';

const Main = () => {
    const isAuth: boolean = true;
    return (
        <div className="Main">
            {isAuth ? <AuthHeader /> : <Header />}
            {isAuth ? <AuthMainContent /> : <MainContent />}
            {isAuth ? <LeftPanel /> : null}
        </div>
    );
};

export default Main;
