import {DatePipe} from "@angular/common";

export class TimeTransfer {
  public static toRuTranslate(date: Date): string | undefined {
    const pipe = new DatePipe('ru');
    const ruDate = pipe.transform(date, 'MMMM y')?.split(' ');
    let translateArray: string[] | undefined = [];

    translateArray = ruDate?.map(element => {
      if (typeof String(element) === 'string') {
        const lastLetter = element[element.length - 1];

        switch (true) {
          case element === 'мая': {
            element = element[0].toUpperCase() + element.slice(1, -1) + 'й';
            return element
          }
          case lastLetter === 'а': {
            element = element[0].toUpperCase() + element.slice(1, -1);
            return element
          }
          case lastLetter === 'я': {
            element = element[0].toUpperCase() + element.slice(1, -1)+ 'ь';
            return element
          }
        }
      }
      return element
    });

    return translateArray?.join(' ');
  }
}