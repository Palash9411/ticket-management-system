import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketService } from 'src/app/services/ticket.service';


import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent implements OnInit {

  constructor(private ticketService: TicketService,
    private fb: FormBuilder,
    private router: Router,
    private storage: StorageService) { }

  public ticketForm!: FormGroup;

  statusList: Array<string> = ['Open', 'In progress', 'Closed', 'Deferred'];

  ngOnInit(): void {

    // initial form 
    this.ticketForm = this.fb.group({
      id: [{ value: this.ticketService.generatId(), disabled: true }],
      title: ['', { validators: Validators.maxLength(128) }],
      description: ['', Validators.maxLength(1024)],
      status: ['Open'],
      createDate: [{ value: new Date(), disabled: true }]
    });
  }

  // method will be called on creating ticket successfully
  onSubmit(): void {
    this.storage.chekTicketListExists(this.ticketForm.getRawValue());
    this.router.navigate(['./tickets']);
  }

  //method will be called when user cancels ticket creation 
  onUserCancel(): void {
    this.ticketService.createTicketCanceled();
    this.router.navigate(['./tickets']);
  }
}
