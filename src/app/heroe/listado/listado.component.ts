import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

 heroes:string[] = ["Spiderman","Ironman","Thor","Hulk","Capitan America","Antman"];
 heroeBorrado:string | undefined;
 heroesBorrados: string[]=[];


borrarHeroe():void{
 this.heroeBorrado =  this.heroes.pop();
  console.log(typeof this.heroeBorrado);
  this.heroesBorrados.push(String(this.heroeBorrado));

}




}
