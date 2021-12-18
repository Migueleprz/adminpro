import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Panel Principal',
      icon: 'mdi mdi-gauge',
      submenu:[
        { titulo: 'Inicio', url: '/'},
        { titulo: 'ProgresBar', url: 'progress'},
        { titulo: 'Gráfica', url: 'grafica1'},
        { titulo: 'Promesas', url: 'promesas'},
        { titulo: 'Rxjs', url: 'rxjs'},
      ]
    }
  ];
  constructor() { }
}
