export interface ListVacancy {
    listVacancy: Array<Vacancy>;
}

interface Vacancy {
    name: string;
    musicalStyleList: Array<String>;
}
