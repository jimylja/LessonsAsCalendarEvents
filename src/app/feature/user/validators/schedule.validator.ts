import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import * as moment from 'moment';

export function ScheduleValidator(): ValidatorFn {
  return (group: FormGroup): ValidationErrors => {
    const lessonsStartSchedule = group.value.lessonsStartSchedule;
    const lessonsDuration = group.value.lessonDuration;
    return getValidationStatus(lessonsStartSchedule, lessonsDuration);
  };
}

function getValidationStatus(lessonsStartSchedule, lessonsDuration) {
  const errors = {};
  const isErrorsFounded = lessonsStartSchedule.some(
    (item, idx) => {
      if (idx < lessonsStartSchedule.length - 1) {
        const curLesson = moment(item, 'HH:mm a');
        const nextLesson = moment(lessonsStartSchedule[idx + 1], 'HH:mm a');
        const isIntervalInvalid = Math.abs(curLesson.diff(nextLesson, 'minutes')) <= lessonsDuration;
        if (curLesson.isAfter(nextLesson)) { Object.assign(errors, {orderError: true}); }
        if (isIntervalInvalid) { Object.assign(errors, {durationError: true}); }
        return isIntervalInvalid || curLesson.isAfter(nextLesson);
      }
    }
  );
  return isErrorsFounded ? errors : null;
}
