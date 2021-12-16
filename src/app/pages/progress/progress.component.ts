import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [
    './progress.component.css'
  ]
})
export class ProgressComponent {
  pro1: number = 0;
  pro2: number = 0;

  get getProg1()
  {
    return `${this.pro1}%`
  }

  get getProg2()
  {
    return `${this.pro2}%`
  }


}
