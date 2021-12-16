import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import {FormsModule} from "@angular/forms";
import { DonaCharComponent } from './dona-char/dona-char.component';
import {NgChartsModule} from "ng2-charts";



@NgModule({
  declarations: [
    IncrementadorComponent,
    DonaCharComponent
  ],
  exports:[
    IncrementadorComponent,
    DonaCharComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule,
  ]
})
export class ComponentsModule { }
