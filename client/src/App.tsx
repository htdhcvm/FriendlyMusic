import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import OnlyForVisitor from './components/elements/OnlyForVisitor/OnlyForVisitor';
import ProtectedPage from './components/elements/ProtectedPage/ProtectedPage';

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
import Group from './components/pages/Group/Group';

// fetch(`/api/getAllModels`, { method: 'GET' })
//     .then((r) => r.json())
//     .then((data) => console.log(data.users));
const App = () => {
    return (
        <Router>
            <Switch>
                <ProtectedPage path="/settings">
                    <Settings />
                </ProtectedPage>
                <ProtectedPage path="/user/:idUser">
                    <User />
                </ProtectedPage>
                <ProtectedPage path="/resume/:resumeId" exact>
                    <Resume />
                </ProtectedPage>
                <Route path="/vacancy/:vacancyId" exact>
                    <Vacancy />
                </Route>
                <OnlyForVisitor path="/signInSignUp">
                    <SignInSignUp />
                </OnlyForVisitor>
                <Route path="/group/:idGroup">
                    <Group />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/main">
                    <Main />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
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
