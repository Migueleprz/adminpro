import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {
  //@Input() progreso:number = 0;
 @Input('valor') progreso:number = 0;
 @Input() btnclass: string = '';

  @Output('valor') incValor: EventEmitter<number> = new EventEmitter();

  cvalor(v:number)
  {
    if(this.progreso >=100 && v >=0 )
    {
      this.incValor.emit(100);
      return this.progreso = 100;
    }

    if(this.progreso <=0 && v < 0 )
    {
      this.incValor.emit(0);
      return this.progreso = 0;
    }

    this.progreso = this.progreso + v;
    return this.incValor.emit(this.progreso);
  }

}
