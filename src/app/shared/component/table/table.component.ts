import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Ticket } from 'src/app/models';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {

  constructor() { }
  @Input() ticketList: Ticket[] = [];
  @Input() displayedColumns: Array<string> = [];
  @Output() openUserTicketDetails  : EventEmitter<number> = new EventEmitter()

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource: any;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Ticket>(this.ticketList);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openUserDetails(id : number): void{
    this.openUserTicketDetails.emit(id) ;
  }


}


