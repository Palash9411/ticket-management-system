import { Pipe, PipeTransform } from '@angular/core';
import { Ticket } from 'src/app/models';

@Pipe({
  name: 'filterData',
})
export class FilterDataPipe implements PipeTransform {

  /**
   * filtering data using id and title.
   * @param ticketArr created ticketList 
   * @param text searched Id or title.
   * @returns Filtered List as Ticket Array.
   */

  transform(ticketArr: Ticket[], text: string): Ticket[] {
    if (!text) {
      return ticketArr;
    }
    if (!ticketArr) {
      return [];
    }
    return ticketArr.filter((ticket) => {
      if (ticket.title.toLocaleLowerCase().match(text.toLocaleLowerCase())) {
        return true;
      }
      if (ticket.id == parseInt(text)) {
        return true;
      }
      return false;
    });
  }
}
