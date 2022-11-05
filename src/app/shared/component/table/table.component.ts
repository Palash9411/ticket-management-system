import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Ticket } from 'src/app/models';
import { debug } from 'console';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit,OnChanges,AfterViewInit {

  constructor() { }
  @Input() ticketList: Ticket[] = [];
  @Input() displayedColumns: Array<string> = [];
  @Output() openUserTicketDetails: EventEmitter<number> = new EventEmitter()

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource: any;
  ngOnChanges(changes: SimpleChanges) :void {
    // to reset  the dataSource and pagination value of the tabel on Input updation 
    if (changes['ticketList'].currentValue) {
      this.dataSource = new MatTableDataSource<Ticket>(changes['ticketList'].currentValue);
      this.dataSource.paginator = this.paginator;
    }
  }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Ticket>(this.ticketList);
  }
  ngAfterViewInit() : void {
    this.dataSource.paginator = this.paginator;
  }
  // triggered when user clicks update button 
  openUserDetails(id: number): void {
    this.openUserTicketDetails.emit(id);
  }
}


