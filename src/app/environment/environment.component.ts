import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from '../service/environment.service';

@Component({
  selector: 'environment-component',
  templateUrl: './environment.component.html'
})
export class EnvironmentComponent implements OnInit {
  env : Environment[];

  constructor(private postService: EnvironmentService) { }

  ngOnInit() {  
    this.postService.getEnvironment().subscribe(posts => {
      this.env = posts;
      console.log(posts);
    });
  }
}