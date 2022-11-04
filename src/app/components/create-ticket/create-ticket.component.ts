import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from 'src/app/models';
@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent implements OnInit {

  constructor(private ticketService: TicketService) { }

  public initialFormVal: Ticket = {id : this.ticketService.generatId() , status : 'Open' , description :'' ,title :'' ,createDate : new Date()}
  ngOnInit(): void {
  }


}
