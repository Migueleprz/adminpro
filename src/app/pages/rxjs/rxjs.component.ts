import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Subscription} from "rxjs";
import {filter, map, take} from "rxjs/operators";



@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {
private intervalSub: Subscription;
  constructor()
  {
  this.intervalSub =  this.retornaIntevalo().subscribe(
      console.log
    );

   /* this.retornaObsv().pipe(
      retry(1)
    )
      .subscribe(
      valor => console.log(valor),
      error => console.error(error),
      () => console.log('terminado')
    );*/
  }

  ngOnDestroy(): void {
        this.intervalSub.unsubscribe();
    }

  ngOnInit(): void {
  }

  retornaIntevalo(): Observable<number>
  {
    return interval(300).pipe(
      map(v=> v+1),
      filter(v=> (v % 2 === 0)),
      take(20),

    );
  }

  retornaObsv(): Observable<number>
  {


    return new Observable<number>(osb => {
      let i = -1;
      const intv = setInterval(() => {
        i++;
        osb.next(i);
        if (i == 5) {
          clearInterval(intv);
          osb.complete();
        }

        if (i === 2) {
          osb.error('i llego al valor de 2');
        }
      }, 1000)
    });
  }

}
