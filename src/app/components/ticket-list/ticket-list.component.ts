import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { TicketService } from 'src/app/services/ticket.service';


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  constructor(private ticketService: TicketService,
    public storage: StorageService) { }
  displayedColumns: string[] = ['id', 'title', 'description', 'status', 'createDate'];

  ngOnInit(): void {
    this.ticketService.setIdOnReload();
  }
}
