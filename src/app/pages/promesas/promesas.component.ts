import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const promesa = new Promise((rv, rj)=>{
      if(true)
      {
        rv('hi world!');
      }
      else{
        rj('algo salio mal');
      }

    });
    promesa.then((msg)=>{
      console.log(msg);
    }).catch(err=>{
      console.log(err)});
    console.log('hiiiii');

    this.getUsuarios().then(user=>{
      console.log(user)
    });
  }

  getUsuarios()
  {
    const promesa = new Promise(rsv=>{
      fetch('https://reqres.in/api/users?page=2')
        .then(resp=> resp.json())
        .then(body=> rsv(body.data))
        .catch(err=>{
          console.log(err)
        });
    })

    return promesa;

  }

}
