import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-section',
  template: `<navbar-section></navbar-section>
              <div>
                <p> Torry Harris Business Solution </p>
              </div>`,
  styles: ['p { font-size: 20px;position: relative; left: 80px; }']
})
export class DashboardComponent { }