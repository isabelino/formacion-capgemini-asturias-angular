import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  constructor(private dbzServicio:DbzService){
    dbzServicio.saludar();

  }

  /*personajes:Personaje[] =[
    {
      nombre: "Goku",
      poder: 250000
    },
    {
      nombre: "Vegeta",
      poder: 245000
    }
  ];*/

  nuevo: Personaje ={
    nombre: "",
    poder: 0
  }

  agregarNuevoPersonaje(personaje:Personaje):void{
    console.log("Componente Padre",personaje);
  }



}
