import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterial } from './angular.material';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './global/footer.component';
import { HeaderComponent } from './global/header.component';
import{ DashboardComponent } from './dashboard/dashboard.component';
import { TicketComponent } from './ticket/ticket.component';

import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from './app.route';
import { TicketService } from './service/ticket.service';

@NgModule({
  imports: [
    BrowserModule, FormsModule , BrowserAnimationsModule, AngularMaterial, HttpClientModule, 
    RouterModule.forRoot (appRoutes)
  ],
  declarations: [ 
    AppComponent, NavbarComponent, HeaderComponent, FooterComponent, DashboardComponent, TicketComponent
  ],
  providers: [ TicketService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
