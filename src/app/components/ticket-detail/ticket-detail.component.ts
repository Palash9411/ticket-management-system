import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ticket } from 'src/app/models';
import { StorageService } from 'src/app/services/storage.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss']
})
export class TicketDetailComponent implements OnInit {

  constructor(private storage: StorageService, private route: ActivatedRoute) { }
  
  public routeSub: Subscription | null = null ;
  public formVal: Ticket = { id: 0, status: 'Open', description: '', title: '', createDate: new Date() };

  ngOnInit(): void {
    let ticketList = JSON.parse(this.storage.get('ticketList') || '{}');
    this.setFormVal(ticketList);

  }
  setFormVal(list : Ticket[]) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.formVal = list.find(ticket => ticket.id == params['id']) as Ticket
    })
  }
  ngOnDestroy() {
    this.routeSub?.unsubscribe();
  }
}
