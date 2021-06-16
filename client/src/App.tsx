import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import OnlyForVisitor from './components/elements/OnlyForVisitor/OnlyForVisitor';
import NotMatch from './components/pages/NotMatch/NotMatch';
import About from './components/pages/About/About';
import Preview from './components/pages/Preview/Preview';
import SignInSignUp from './components/pages/SignInSignUp/SignInSignUp';
import User from './components/pages/User/User';
import Vacancy from './components/pages/Vacancy/Vacancy';
import Main from './components/pages/Main/Main';
import Resume from './components/pages/Resume/Resume';
import Search from './components/pages/Search/Search';
import Settings from './components/pages/Settings/Settings';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/settings">
                    <Settings />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/user">
                    <User />
                </Route>
                <Route path="/vacancy">
                    <Vacancy />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/resume">
                    <Resume />
                </Route>
                <Route path="/main">
                    <Main />
                </Route>
                <OnlyForVisitor path="/signInSignUp">
                    <SignInSignUp />
                </OnlyForVisitor>
                <Route path="/" exact>
                    <Preview />
                </Route>
                <Route path="*">
                    <NotMatch />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
