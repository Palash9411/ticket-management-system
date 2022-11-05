import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ticket } from 'src/app/models';
import { StorageService } from 'src/app/services/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';
@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss']
})
export class TicketDetailComponent implements OnInit {

  constructor(private storage: StorageService, 
    private route: ActivatedRoute ,
    private ticketService: TicketService,
    private router: Router) { }
  
  public routeSub: Subscription | null = null ;
  public formVal: Ticket = { id: 0, status: 'Open', description: '', title: '', createDate: new Date() };

  ngOnInit(): void {
    let ticketList = JSON.parse(this.storage.get('ticketList') || '{}');
    this.setFormVal(ticketList);

  }
  setFormVal(list : Ticket[]) : void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.formVal = list.find(ticket => ticket.id == params['id']) as Ticket
    })
  }
  
  ngOnDestroy() :void {
    this.routeSub?.unsubscribe();
  }
  userCanceled(): void{
    this.ticketService.createTicketCanceled();
    this.router.navigate(['./tickets']);
  }
  onUserUpdation(data : {value : Ticket ; actionType : string}){
    this.storage.chekTicketListExists(data.value, data.actionType);
    this.router.navigate(['./tickets']);
  }
}
