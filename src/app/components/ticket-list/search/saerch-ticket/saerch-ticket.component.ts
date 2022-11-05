import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounce, debounceTime, distinctUntilChanged, Subscription } from 'rxjs';


@Component({
  selector: 'app-saerch-ticket',
  templateUrl: './saerch-ticket.component.html',
  styleUrls: ['./saerch-ticket.component.scss']
})
export class SaerchTicketComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder) { }
  @Output() seachedText: EventEmitter<string> = new EventEmitter()
  public searchForm!: FormGroup;
  private serachTextSub: Subscription | null = null;
  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchText: ['']
    });
    this.onSerachTextChange();
  }
  // calls when user types text 
  onSerachTextChange() {
    this.serachTextSub = this.searchForm.controls['searchText'].valueChanges.pipe(debounceTime(500),distinctUntilChanged()).subscribe((val: string) => {
      this.seachedText.emit(val);
    })
  }
  ngOnDestroy(): void {
    this.serachTextSub?.unsubscribe();
  }

}
