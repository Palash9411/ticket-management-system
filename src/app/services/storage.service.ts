import { Inject, Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ticket } from '../models';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage
});

@Injectable({
  providedIn: 'root'
})

export class StorageService {


  private ticketListSubject$: BehaviorSubject<Ticket[]> = new BehaviorSubject<Ticket[]>([]);

  public readonly ticketList$ = this.ticketListSubject$.asObservable() ;


  constructor(@Inject(BROWSER_STORAGE) public storage: Storage) { }

  
  get(key: string)  {
    return this.storage.getItem(key);
  }

  
  set(key: string, value: string):void{
    this.storage.setItem(key, value);
  }

  chekTicketListExists(value : Ticket) : void{
    this.get('ticketList') ? this.updateTicketList(value) : this.initiateTicketList(value) 
  }

  // method if ticketListExists
  updateTicketList(value :Ticket) : void{
      let currentList  = JSON.parse(this.get('ticketList') || '{}') ;
      let updatedList = [...currentList,value] ;
      this.sendDatatoComponent(updatedList) ;
      this.set('ticketList',JSON.stringify(updatedList));
  }

  // initialize new ticketList
  initiateTicketList(value:Ticket):void{
    let arr = [] ; 
    arr.push(value) ;
    this.sendDatatoComponent(arr) ;
    this.set('ticketList',JSON.stringify(arr)) ;
  }

  sendDatatoComponent(value: Ticket[]){
    this.ticketListSubject$.next(value)
  }
}
