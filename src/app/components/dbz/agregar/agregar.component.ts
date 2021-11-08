import { Component, Input,EventEmitter, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {

  @Input() nuevo:Personaje = {
    nombre:'',
    poder:0
  }

  constructor(private dbzService:DbzService){

  }
  // @Output() onNuevoPersonaje : EventEmitter <Personaje> = new EventEmitter();

  agregar(){
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.dbzService.agregarPersonaje(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.nuevo =  {
      nombre:'',
      poder: 0
    }
  }  

}
