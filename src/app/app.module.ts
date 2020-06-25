import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './global/footer.component';
import { HeaderComponent } from './global/header.component';
import{ DashboardComponent } from './dashboard/dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { appRoutes } from './app.route';

@NgModule({
  imports: [
    BrowserModule, FormsModule , BrowserAnimationsModule, MatIconModule, MatSidenavModule,MatTabsModule,MatButtonModule, MatCheckboxModule, MatToolbarModule, MatListModule,
    RouterModule.forRoot (appRoutes)
  ],
  declarations: [ 
    AppComponent, NavbarComponent, HeaderComponent, FooterComponent, DashboardComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
