import { Pipe, PipeTransform } from '@angular/core';

export enum LessonEntities {
  'number'= '№',
  'date' = 'Дата',
  'order' = '№' + '<div>(розкл.)</div>',
  'location' = 'Каб.',
  'topic' = 'Тема',
  'hwTheory' = 'Теор.<div>(д. завд.)</div>',
  'hwPractice' = 'Практ.<div>(д. завд.)</div>'
}

@Pipe({
  name: 'columnTitle'
})
export class ColumnTitlePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return LessonEntities[value];
  }

}
