import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ActivationEnd, Router} from "@angular/router";
import {filter, map} from "rxjs/operators";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy{

  public titulo: any;
  public titulo$!: Subscription;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {

   this.titulo$ = this.getUrlData().subscribe(({titulo})=>{
     this.titulo = titulo;
     document.title = ` Admin - ${titulo}`;

   });

  }

  ngOnDestroy(): void {
        this.titulo$.unsubscribe();
    }

  getUrlData()
  {
   return this.router.events
      .pipe(
        // @ts-ignore
        filter(e => e instanceof ActivationEnd),
        filter((e:ActivationEnd)=> e.snapshot.firstChild === null),
        map((e:ActivationEnd)=> e.snapshot.data),
      );

  }

}
