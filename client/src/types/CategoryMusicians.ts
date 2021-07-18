type Category =
    | {
          type: 'conductor';
          description: 'Дирижер';
      }
    | {
          type: 'contrabass';
          description: 'Контрабасист';
      }
    | {
          type: 'drummer';
          description: 'Барабанщик';
      }
    | {
          type: 'electricGuitarBass';
          description: 'Басист';
      }
    | {
          type: 'electricGuitarRitm';
          description: 'Ритм-гитарист';
      }
    | {
          type: 'electricGuitarSolo';
          description: 'Соло-гитарист';
      }
    | {
          type: 'guitarClassic';
          description: 'Классический-гитарист';
      }
    | {
          type: 'musicTeacher';
          description: 'Учитель музыки';
      }
    | {
          type: 'piano';
          description: 'Пианист';
      }
    | {
          type: 'singer';
          description: 'Певец';
      }
    | {
          type: 'dj';
          description: 'Диджей';
      }
    | {
          type: 'violin';
          description: 'Скрипач';
      }
    | {
          type: 'violinist';
          description: 'Виолончелист';
      }
    | {
          type: '';
          description: '';
      };

export type CategoryType =
    | 'conductor'
    | 'contrabass'
    | 'drummer'
    | 'electricGuitarBass'
    | 'electricGuitarRitm'
    | 'electricGuitarSolo'
    | 'guitarClassic'
    | 'musicTeacher'
    | 'piano'
    | 'singer'
    | 'dj'
    | 'violin'
    | 'violinist'
    | '';

export type CategoryDescription =
    | 'Дирижер'
    | 'Контрабасист'
    | 'Барабанщик'
    | 'Басист'
    | 'Ритм-гитарист'
    | 'Соло-гитарист'
    | 'Классический-гитарист'
    | 'Учитель музыки'
    | 'Пианист'
    | 'Певец'
    | 'Диджей'
    | 'Скрипач'
    | 'Виолончелист'
    | '';

export default Category;
