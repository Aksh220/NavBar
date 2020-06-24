import { Routes } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import{ DashboardComponent } from './dashboard/dashboard.component';

export const appRoutes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: '', redirectTo: 'navbar', pathMatch: 'full' },
  { path:'dashboard' , component:DashboardComponent }
]