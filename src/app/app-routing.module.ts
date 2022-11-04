import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { TicketDetailComponent } from './components/ticket-detail/ticket-detail.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tickets',
    pathMatch: 'full'
  },
  {
    path: 'tickets',
    component: TicketListComponent
  },
  {
    path: 'tickets/:id',
    component: TicketDetailComponent
  },
  {
    path: 'create-ticket',
    component: CreateTicketComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
