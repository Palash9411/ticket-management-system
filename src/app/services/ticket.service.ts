import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private storage: StorageService) {
  }

  private id: number = 0;

  // calling it on Reload
  public setIdOnReload() {
    let list = JSON.parse(this.storage.get('ticketList') || '{}')
    list?.length ? this.storage.sendDatatoComponent(list) : []
    this.id = list?.length ? list.length : 0;
  }
//method to generate uniqueId for each ticket 
  get ticketId () : number{
    return this.id+1;
  }
// method to set back id 
  set ticketId(id:number)  {
      this.id = id ;
  }
  
}
