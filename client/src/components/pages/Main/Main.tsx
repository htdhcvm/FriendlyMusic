import './Main.scss';

import { PageBuilder, Director } from '../../../factoryComponents/main';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const Main = () => {
    const pageBuilderMain: PageBuilder = new PageBuilder();
    const director: Director = new Director();

    const isAuth: boolean = useTypedSelector((state) => state.user.isAuth);

    isAuth
        ? director.constructAuthMain(pageBuilderMain)
        : director.constructNotAuthMain(pageBuilderMain);

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
