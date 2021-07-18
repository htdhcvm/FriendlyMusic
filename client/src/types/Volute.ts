type LabelVolute = '$' | '€' | '₽';
type ValueVolute = 'USD' | 'EUR' | 'RU';

type Volute = {
    value: ValueVolute;
    label: LabelVolute;
};

export default Volute;
