import './Vacancy.scss';

import { PageBuilder, Director } from '../../../factoryComponents/main';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import withVacancyData from '../../hoc/withVacancyData';

const Vacancy = () => {
    const pageBuilderMain: PageBuilder = new PageBuilder();
    const director: Director = new Director();

    const isAuth: boolean = useTypedSelector((state) => state.user.isAuth);

    isAuth
        ? director.constructorForVacancyPageAuth(pageBuilderMain)
        : director.constructorForVacancyPageNotAuth(pageBuilderMain);

    const { Header, LeftPanel, Content } = pageBuilderMain.getResult();

    let ContentWithData;
    if (Content) {
        ContentWithData = withVacancyData({ Component: Content });
    }

    return (
        <div className="Vacancy">
            {Header ? <Header /> : null}
            {LeftPanel ? <LeftPanel /> : null}
            {ContentWithData ? <ContentWithData /> : null}
        </div>
    );
};

export default Vacancy;
