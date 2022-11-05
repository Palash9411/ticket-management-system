import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ticket } from 'src/app/models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public ticketForm!: FormGroup;

  statusList: Array<string> = ['Open', 'In progress', 'Closed', 'Deferred'];

  @Input() formValue: Ticket = { id: 0, status: 'Open', description: '', title: '', createDate: new Date() }

  @Input() buttonTitle: string = 'Save';
  
  @Output() onUserSubmit  : EventEmitter<{value : Ticket ; actionType : string}> = new EventEmitter() ;

  @Output() onCancel : EventEmitter<null>   = new EventEmitter() ;

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
    this.onUserSubmit.emit({value : this.ticketForm.getRawValue() , actionType : str? str : ''})
  }

  //method will be called when user cancels ticket creation 
  onUserCancel(): void {
    this.onCancel.emit()
  }
}
