import { Component } from '@angular/core';

@Component({
  selector: 'header-section',
  template: `
    <header>
      <section class="header-wrapper">
        <div>
          <img class="logo" src="https://deplomatic-ui.s3.amazonaws.com/assets/logo/mySandbox_logo_dark_bg.svg" placeholder="Logo" height="30px" >
        </div>
      </section>
    </header>
    `
})

export class HeaderComponent {  }