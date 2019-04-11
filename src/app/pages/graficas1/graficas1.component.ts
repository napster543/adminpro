import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {

 
  graficos: any = {
    'graficos1' : {
      'labels': ['Con frijoles', 'Con natilla', 'Con tocino'],
      'data': [24, 30, 46],
      'type': 'doughnut',
      'leyenda': 'El pan se come con'
    },'graficos2' : {
      'labels': ['Hombres', 'Mujeres'],
      'data': [4500, 6000],
      'type': 'doughnut',
      'leyenda': 'Entrvistados'
    },'graficos3' : {
      'labels': ['SI', 'NO'],
      'data': [95,5],
      'type': 'doughnut',
      'leyenda': '¿Le dan gases los frijoles?'
    },'graficos4' : {
      'labels': ['NO', 'SI'],
      'data': [85, 15],
      'type': 'doughnut',
      'leyenda': 'Prueba 1'
    }
    
  }

  constructor() { }

  ngOnInit() {
  }

}
