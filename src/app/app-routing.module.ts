import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import {PagesRoutingModule} from "./pages/pages.routing";
import {AuthRoutingModule} from "./auth/auth.routing";

import {Page404Component} from "./page404/page404.component";




const routes: Routes = [
  {path:'', redirectTo:'/panel', pathMatch:'full'},
  {path:'**', component: Page404Component}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
