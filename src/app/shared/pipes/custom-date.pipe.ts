import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(date: Date): string {
    let value = new Date(date);
    let formatedDate = `${value.getFullYear()}-${value.getMonth()}-${value.getDate()}  ${value.getHours()}:${value.getMinutes()}` 
    return formatedDate;
  }

}
