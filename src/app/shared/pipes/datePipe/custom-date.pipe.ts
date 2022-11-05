import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(date: Date): string {
    let value = new Date(date);
    let formatedDate = `${value.getFullYear()}-${this.checkFormat(value.getMonth())}-${this.checkFormat(value.getDate())}  ${this.checkFormat(value.getHours())}:${this.checkFormat(value.getMinutes())}`
    return formatedDate;
  }
  // method to append 0 in front if value is less than 10 
  checkFormat(value: number): string {
    let result = value < 10 ? '0' + value : String(value);
    return result;
  }
}
