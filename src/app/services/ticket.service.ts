import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private storage : StorageService) { }

  
  private id :number = 0 ;


  setIdOnReload(){
    let list = JSON.parse(this.storage.get('ticketList') || '{}')
    list?.length ? this.storage.sendDatatoComponent(list) : []
     this.id = list?.length ?  list.length : 0 ;
  }
  //private method to generate uniqueId for each ticket 
  public generatId() : number{
    this.id++ ;
    return this.id ;
  }

  public createTicketCanceled(): void {
    this.id = this.id - 1  ;
  }
  
}