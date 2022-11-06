import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ticket } from 'src/app/models';
import { StorageService } from 'src/app/services/storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss'],
})
export class TicketDetailComponent implements OnInit {
  constructor(
    private storage: StorageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public routeSub: Subscription | null = null;
  public formVal: Ticket = {
    id: 0,
    status: 'Open',
    description: '',
    title: '',
    createDate: new Date(),
  };

  ngOnInit(): void {
    // getting localStorage data
    let ticketList = JSON.parse(this.storage.get('ticketList') || '{}');
    this.setFormVal(ticketList);
  }
  // method triggered to get id from router params and finding from localstorage Data
  setFormVal(list: Ticket[]): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.formVal = list.find((ticket) => ticket.id == params['id']) as Ticket;
    });
  }
  // method called when user clicks on cancel while creating ticket
  userCanceled(): void {
    this.router.navigate(['./tickets']);
  }
  // method called when user updates ticket
  onUserUpdation(data: { value: Ticket; actionType: string }) {
    this.storage.chekTicketListExists(data.value, data.actionType);
    this.router.navigate(['./tickets']);
  }
  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }
}
