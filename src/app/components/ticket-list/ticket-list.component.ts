import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss'],
})
export class TicketListComponent  {
  constructor(
    public storage: StorageService,
    private router: Router
  ) {}

  public displayedColumns: string[] = [
    'id',
    'title',
    'description',
    'status',
    'createDate',
    'actions',
  ];
  public filteredText: string = '';

  // navigate to single ticket information
  navigateToUserData(id: number) {
    this.router.navigate(['/tickets/' + id]);
  }
  // setting user text to filter using pipe
  filterText(text: string): void {
    this.filteredText = text;
  }
}
