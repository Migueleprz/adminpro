import { Component, OnInit } from '@angular/core';
import {SettingsService} from "../services/settings.service";
// @ts-ignore
declare function InitFunction();
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor(
    private settingSeriq: SettingsService
  ) { }

  ngOnInit(): void {
    InitFunction()

  }

}
