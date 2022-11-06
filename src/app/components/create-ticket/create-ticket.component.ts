import { Component } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from 'src/app/models';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss'],
})
export class CreateTicketComponent {
  constructor(
    private ticketService: TicketService,
    public storage: StorageService,
    private router: Router
  ) {}

  public initialFormVal: Ticket = {
    id: this.ticketService.ticketId,
    status: 'Open',
    description: '',
    title: '',
    createDate: new Date(),
  };

  // method called when user clicks on cancel while creating ticket
  userCanceled(): void {
    this.router.navigate(['./tickets']);
  }
  // method called when user creates ticket
  onUserCreation(data: { value: Ticket; actionType: string }) {
    this.ticketService.ticketId = this.initialFormVal.id;
    this.storage.chekTicketListExists(data.value);
    this.router.navigate(['./tickets']);
  }
}
