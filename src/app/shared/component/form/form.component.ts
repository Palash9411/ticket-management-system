import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models';
import { StorageService } from 'src/app/services/storage.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private ticketService: TicketService,
    private router: Router,
    private storage: StorageService) { }

  public ticketForm!: FormGroup;

  @Input() formValue: Ticket = { id: 0, status: 'Open', description: '', title: '', createDate: new Date() }

  statusList: Array<string> = ['Open', 'In progress', 'Closed', 'Deferred'];

  @Input() buttonTitle: string = 'Save';

  ngOnInit(): void {
    // reactive form setup 
    this.ticketForm = this.fb.group({
      id: [{ value: this.formValue.id, disabled: true }],
      title: [this.formValue.title, [Validators.maxLength(128), Validators.required]],
      description: [this.formValue.description, [Validators.maxLength(1024), Validators.required]],
      status: [this.formValue.status],
      createDate: [{ value: this.formValue.createDate, disabled: true }]
    });
  }
  // method will be called on creating ticket successfully
  onSubmit(str?: string): void {
    this.storage.chekTicketListExists(this.ticketForm.getRawValue(), str ? str : '');
    this.router.navigate(['./tickets']);
  }

  //method will be called when user cancels ticket creation 
  onUserCancel(): void {
    this.ticketService.createTicketCanceled();
    this.router.navigate(['./tickets']);
  }
}
