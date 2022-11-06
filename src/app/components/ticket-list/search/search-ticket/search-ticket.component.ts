import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';

@Component({
  selector: 'app-search-ticket',
  templateUrl: './search-ticket.component.html',
  styleUrls: ['./search-ticket.component.scss'],
})
export class SearchTicketComponent implements OnInit, OnDestroy {
  constructor(private fb: FormBuilder) {}
  @Output() seachedText: EventEmitter<string> = new EventEmitter();
  public searchForm!: FormGroup;
  private serachTextSub: Subscription | null = null;
  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchText: [''],
    });
    this.onSerachTextChange();
  }
  // subscription when user types text
  onSerachTextChange(): void {
    // debouncing call to 500ms to avoid unwanted hits .
    this.serachTextSub = this.searchForm.controls['searchText'].valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((val: string) => {
        this.seachedText.emit(val);
      });
  }
  ngOnDestroy(): void {
    this.serachTextSub?.unsubscribe();
  }
}
