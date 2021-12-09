import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {ProgressComponent} from "./pages/progress/progress.component";
import {Grafica1Component} from "./pages/grafica1/grafica1.component";
import {Page404Component} from "./pages/page404/page404.component";
import {PagesComponent} from "./pages/pages.component";

const routes: Routes = [
  {
    path:'',
    component: PagesComponent,
    children:[
      {
        path: 'panel',
        component: DashboardComponent
      },
      {
        path:'progress',
        component: ProgressComponent
      },
      {
        path:'grafica1',
        component: Grafica1Component
      },
      {
        path:'',
        redirectTo: '/panel',
        pathMatch: 'full'
      }
    ]
  },



  {
    path:'ingreso',
    component: LoginComponent
  }
  ,
  {
    path:'registro',
    component: RegisterComponent
  },
  {
    path:'**',
    component: Page404Component
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
