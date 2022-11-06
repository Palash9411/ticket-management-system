import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate',
})
export class CustomDatePipe implements PipeTransform {
  /**
   * changing date string to required date format YYYY-MM-DD hh:mm.
   * @param date value as a date type
   * @returns date with format YYYY-MM-DD hh:mm.
   */
  transform(date: Date): string {
    let value = new Date(date);
    let formatedDate = `${value.getFullYear()}-${this.checkFormat(
      value.getMonth()
    )}-${this.checkFormat(value.getDate())}  ${this.checkFormat(
      value.getHours()
    )}:${this.checkFormat(value.getMinutes())}`;
    return formatedDate;
  }
  // method to append 0 in front if value is less than 10.
  checkFormat(value: number): string {
    let result = value < 10 ? '0' + value : String(value);
    return result;
  }
}
