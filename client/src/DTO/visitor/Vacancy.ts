import Vacancy from '../../types/Vacancy';

type DTOVacancy = Omit<Vacancy, 'typeVacancyMusic'>;

export default DTOVacancy;
