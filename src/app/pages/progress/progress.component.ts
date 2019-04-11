import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgessComponent implements OnInit {

  progreso1 : number = 20;
  progreso2 : number = 30;

  constructor() { }

  ngOnInit() {
  }

  
}
