export type ListVacancy = Array<Vacancy>;

interface Vacancy {
    id: string;
    title: string;
    image: string;
    groupName: string;
    date: string;
    price: number;
}
