import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";


@Injectable()
export class DbzService{

  private _personajes:Personaje[] =[
    {
      nombre: "Goku",
      poder: 250000
    },
    {
      nombre: "Vegeta",
      poder: 245000
    },
    {
      nombre: "Krilin",
      poder: 15000
    }
  ];

  get personajes():Personaje[]{
    return[...this._personajes];
  }
  constructor(){
    console.log("Servicio iniciado");
  }

  saludar():void{
    console.log("Hola como estas desde servicio");
  }

  agregarPersonaje(personaje:Personaje){
    this._personajes.push(personaje);
  }

}
