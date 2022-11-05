import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaerchTicketComponent } from './saerch-ticket.component';

describe('SaerchTicketComponent', () => {
  let component: SaerchTicketComponent;
  let fixture: ComponentFixture<SaerchTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaerchTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaerchTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
