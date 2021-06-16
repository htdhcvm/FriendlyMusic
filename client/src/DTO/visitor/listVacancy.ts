export interface ListVacancy {
    listVacancy: Array<Vacancy>;
}

interface Vacancy {
    id: string;
    name: string;
    image: string;
    groupName: string;
    date: string;
    price: number;
}
