import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private  linkTheme = document.querySelector('#theme');
  constructor()
  {
    let theme = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    //const url = theme;
    // @ts-ignore
    this.linkTheme.setAttribute('href', theme);
    localStorage.setItem('theme', theme);
  }

  changeTheme(theme:string)
  {

    const url = `./assets/css/colors/${theme}.css`;
    // @ts-ignore
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();

  }

  checkCurrentTheme()
  {
    const link = document.querySelectorAll('.selector');
    // @ts-ignore
    link.forEach(elem=>{
      elem.classList.remove('working')
      const btnTheme = elem.getAttribute('data-theme');
      const btnUrlTheme = `./assets/css/colors/${btnTheme}.css`;
      // @ts-ignore
      const currentTheme = this.linkTheme.getAttribute('href');
      if(btnUrlTheme === currentTheme)
      {
        elem.classList.add('working');
      }
    });
  }

}
