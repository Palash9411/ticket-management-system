import { Component, OnInit } from '@angular/core';
import { TicketService } from './services/ticket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Ticket Management System';

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.ticketService.setIdOnReload();
  }
}
