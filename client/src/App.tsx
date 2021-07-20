import './App.scss';

import { useTypedSelector } from './hooks/useTypedSelector';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import OnlyForOnTypeUser from '@Route/OnlyForOnTypeUser/OnlyForOnTypeUser';
import ProtectedPage from '@Route/ProtectedPage/ProtectedPage';
import NotMatch from '@Pages/NotMatch/NotMatch';
import About from '@Pages/About/About';
import Preview from '@Pages/Preview/Preview';
import SignInSignUp from '@Pages/SignInSignUp/SignInSignUp';
import User from '@Pages/User/User';
import Vacancy from '@Pages/Vacancy/Vacancy';
import Main from '@Pages/Main/Main';
import Resume from '@Pages/Resume/Resume';
import Search from '@Pages/Search/Search';
import Settings from '@Pages/Settings/Settings';
import Group from '@Pages/Group/Group';
import CreateResume from '@Pages/CreateResume/CreateResume';
import CreateVacancy from '@Pages/CreateVacancy/CreateVacancy';
import CreateGroup from '@Pages/CreateGroup/CreateGroup';

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
                <ProtectedPage path='/user/:idUser' exact>
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
