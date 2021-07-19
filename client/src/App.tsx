import './App.scss';

import { useTypedSelector } from './hooks/useTypedSelector';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import OnlyForOnTypeUser from './components/route/OnlyForOnTypeUser/OnlyForOnTypeUser';
import ProtectedPage from './components/route/ProtectedPage/ProtectedPage';
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
import CreateResume from './components/pages/CreateResume/CreateResume';
import CreateVacancy from './components/pages/CreateVacancy/CreateVacancy';
import CreateGroup from './components/pages/CreateGroup/CreateGroup';

const App = () => {
    const { status, isAuth } = useTypedSelector((state) => state.user);

    // useEffect(() => {
    //     fetch(`/api/getAllModels`, { method: 'GET' })
    //         .then((r) => r.json())
    //         .then((data) => console.log(data.users));
    // }, []);

    return (
        <Router>
            <Switch>
                <OnlyForOnTypeUser
                    status={status}
                    isAuth={isAuth}
                    path='/user/createGroup'
                >
                    <CreateGroup />
                </OnlyForOnTypeUser>
                <OnlyForOnTypeUser
                    status={status}
                    isAuth={isAuth}
                    path='/user/createResume'
                >
                    <CreateResume />
                </OnlyForOnTypeUser>
                <OnlyForOnTypeUser
                    status={status}
                    isAuth={isAuth}
                    path='/group/createVacancy'
                >
                    <CreateVacancy />
                </OnlyForOnTypeUser>
                <ProtectedPage path='/settings/:tab?'>
                    <Settings />
                </ProtectedPage>
                <ProtectedPage path='/user/:idUser'>
                    <User />
                </ProtectedPage>
                <ProtectedPage path='/resume/:resumeId' exact>
                    <Resume />
                </ProtectedPage>
                <Route path='/vacancy/:vacancyId' exact>
                    <Vacancy />
                </Route>
                <OnlyForOnTypeUser
                    status={status}
                    isAuth={isAuth}
                    path='/signInSignUp'
                >
                    <SignInSignUp />
                </OnlyForOnTypeUser>
                <Route path='/group/:idGroup'>
                    <Group />
                </Route>
                <Route path='/search'>
                    <Search />
                </Route>
                <Route path='/main'>
                    <Main />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/' exact>
                    <Preview />
                </Route>
                <Route path='*'>
                    <NotMatch />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
