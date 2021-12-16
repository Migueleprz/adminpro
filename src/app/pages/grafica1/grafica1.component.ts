import { Component } from '@angular/core';
import {ChartData, ChartType} from "chart.js";


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {


  public Labels1: string[] = [ 'Platos', 'Vasos', 'Cubiertos' ];
  public dataChart1: ChartData<'doughnut'> = {
    labels: this.Labels1,
    datasets: [
      {
        data: [ 350, 450, 100 ],
        backgroundColor: ['#08243F', '#196EBF','#659ED4',]
      },

    ]
  };
  public Type1: ChartType = 'doughnut';

  public Labels2: string[] = [ 'Naranjas', 'Manzanas', 'Mangos' ];
  public dataChart2: ChartData<'doughnut'> = {
    labels: this.Labels2,
    datasets: [
      {
        data: [ 25, 12, 40 ],
        backgroundColor: ['#0880fF', '#19887F','#088700',]
      },

    ]
  };
  public Type2: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }




}
