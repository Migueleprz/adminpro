import {Component, Input, OnInit} from '@angular/core';
import {ChartData, ChartType} from "chart.js";

@Component({
  selector: 'app-dona-char',
  templateUrl: './dona-char.component.html',
  styles: [
  ]
})
export class DonaCharComponent implements OnInit {

  @Input('titulo') titulo!:string;

// Doughnut
  @Input('labels') doughnutChartLabels: string[] = [];
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [],
        backgroundColor: []
      },

    ]
  };
  @Input('type') doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
