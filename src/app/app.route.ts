import { Routes } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import{ DashboardComponent } from './dashboard/dashboard.component';
import { TicketComponent } from './ticket/ticket.component';

export const appRoutes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: '', redirectTo: 'navbar', pathMatch: 'full' },
  { path:'dashboard' , component: DashboardComponent },
  { path:'ticket' , component: TicketComponent }
]