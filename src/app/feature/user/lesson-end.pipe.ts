import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'lessonEnd'
})
export class LessonEndPipe implements PipeTransform {

  transform(value: string, duration: number, ...args: any[]): any {
    return moment(value, 'HH:mm a').add(duration, 'minutes').format('HH:mm');
  }

}
