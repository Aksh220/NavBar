import { Routes } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import{ DashboardComponent } from './dashboard/dashboard.component';
import { TicketComponent } from './ticket/ticket.component';
import { EnvironmentComponent } from './environment/environment.component';

export const appRoutes: Routes = [
  { path:'dashboard' , component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },  
  { path:'ticket' , component: TicketComponent },
  { path:'environment' , component: EnvironmentComponent }
]