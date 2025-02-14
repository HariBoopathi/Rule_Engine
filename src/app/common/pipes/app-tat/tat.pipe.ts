import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tat',
  standalone: true
})
export class TatPipe implements PipeTransform {

  transform(values:number, type:string):any {

    if (values > 1) {

        if (type === 'day') {
            return values + ' days';
        }
        if (type === 'hr') {
            return values + ' hours';
        }
        if (type === 'min') {
            return values + ' minutes';
        }

    } else {

        if (type === 'day') {
            return values + ' day';
        }
        if (type === 'hr') {
            return values + ' hour';
        }
        if (type === 'min') {
            return values + ' minute';
        }

    }
}


}

// const totalMinutes = Math.round(Number(minutes));
// const days = Math.floor(Number(minutes) / 1440);
// const hours = Math.floor((Number(minutes) % 1440) / 60);
// const mins = totalMinutes % 60;

// let result = '';
// if (days > 0) {
//   result += `${days} Day${days > 1 ? 's' : ''} `;
// }
// if (hours > 0) {
//   result += `${hours} Hour${hours > 1 ? 's' : ''} `;
// }
// if (mins > 0) {
//   result += `${mins} Minute${mins > 1 ? 's' : ''}`;
// }

// let tatResult = result.trim() || '0 Minutes'

// return tatResult.toString(); // Return '0 Minutes' if no time is left
