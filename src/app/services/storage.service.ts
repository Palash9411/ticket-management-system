import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ticket } from '../models';
import { BROWSER_STORAGE } from '../tokens/storage.token';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  private ticketListSubject$: BehaviorSubject<Ticket[]> = new BehaviorSubject<Ticket[]>([]);

  public readonly ticketList$ = this.ticketListSubject$.asObservable();

  constructor(@Inject(BROWSER_STORAGE) public storage: Storage) { }

  get(key: string) {
    return this.storage.getItem(key);
  }

  set(key: string, value: string): void {
    this.storage.setItem(key, value);
  }

  chekTicketListExists(value: Ticket, str?: string): void {
    this.get('ticketList') ? this.updateTicketList(value, str ? str : '') : this.initiateTicketList(value)
  }

  // method if ticketListExists
  updateTicketList(value: Ticket, str?: string): void {
    let currentList = JSON.parse(this.get('ticketList') || '{}');
    let updatedList = str ? this.updateIndex(currentList, value) : [...currentList, value];
    this.sendDatatoComponent(updatedList);
    this.set('ticketList', JSON.stringify(updatedList));
  }
  // update method for ticket 
  updateIndex(list: Ticket[], val: Ticket): Array<Ticket> {
    list[val.id - 1] = val;
    return [...list];
  }
  // initialize new ticketList
  initiateTicketList(value: Ticket): void {
    let arr = [];
    arr.push(value);
    this.sendDatatoComponent(arr);
    this.set('ticketList', JSON.stringify(arr));
  }

  sendDatatoComponent(value: Ticket[]) {
    this.ticketListSubject$.next(value)
  }
}
