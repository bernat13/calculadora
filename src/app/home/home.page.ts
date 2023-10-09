import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
mensaje:number;
  constructor() {
    this.mensaje=0;

  }

  cambiarmensaje(a:number){
    console.log("ha apretado el boton suma " + a);
    this.mensaje=this.mensaje+ a;

  }

}
