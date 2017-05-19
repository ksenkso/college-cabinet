import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'month'
})
export class MonthPipe implements PipeTransform {

  transform(value: any, type: any): any {

    if (value > 12) return value;

    const d = new Date();

    d.setMonth(value);
    const month = d.toLocaleDateString('ru', {month: 'long'});

    return month.charAt(0).toUpperCase() + month.slice(1);

  }

}
