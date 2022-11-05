import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http' ;
import { MaterialModule } from './material.module';
import { SharedModule } from './shared/shared.module';
import { TicketDetailComponent } from './components/ticket-detail/ticket-detail.component';
import { SaerchTicketComponent } from './components/ticket-list/search/saerch-ticket/saerch-ticket.component';
import { FilterPipeModule } from './shared/pipes/filterPipe/filter-pipe.module';
import { CustomDatePipeModule } from './shared/pipes/datePipe/custom-date.pipe.module';



@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    CreateTicketComponent,
    TicketDetailComponent ,
    SaerchTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    MaterialModule ,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CustomDatePipeModule,
    FilterPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
