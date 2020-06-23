import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './global/footer.component';
import { HeaderComponent } from './global/header.component';
import{ DashboardComponent } from './dashboard/dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import { appRoutes } from './app.route';

@NgModule({
  imports:      [ BrowserModule, FormsModule , MatIconModule,
    RouterModule.forRoot (appRoutes)],
  declarations: [ AppComponent, NavbarComponent, HeaderComponent, FooterComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
