import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { TicketService } from 'src/app/services/ticket.service';


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  constructor(private ticketService: TicketService,
    public storage: StorageService,
    private router: Router) { }
    
  displayedColumns: string[] = ['id', 'title', 'description', 'status', 'createDate', 'actions'];

  ngOnInit(): void {
    this.ticketService.setIdOnReload();
  }
  // navigate to single ticket information 
  navigateToUserData(id: number) {
    this.router.navigate(['/tickets/' + id])
  }
}
