import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent  {

  heroes:string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America'];
  heroesBorrados:string[] = [];

  borrarHeroe(){
    debugger
    let heroeBorrado = this.heroes.shift() || '';
    this.heroesBorrados.push(heroeBorrado)
    console.log(heroeBorrado)

  }
}
