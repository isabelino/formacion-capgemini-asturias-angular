import { Component } from "@angular/core";


@Component({
  selector: 'app-acumulador',
  templateUrl:'./acumulador.component.html'
})

export class AcumuladorComponent{
  titulo:string ="Contador";
  numero:number = 10;
  base:number = 5;

  acumulador(valor:number):void{
    this.numero +=valor;
  }
}
