export type ListTypeVacancy = Array<TypeVacancy>;

export interface TypeVacancy {
    count?: number | undefined;
    image: string;
    profession: string;
    type: string;
}
