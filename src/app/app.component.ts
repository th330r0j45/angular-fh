import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Contador App';
  number: number = 10;
  base: number = 5;
  //base numero

  acumular(base: number) {
    this.number += base;
  }
  // sumar(){
  //   this.number+=1;
  // }
  // restar(){
  //   this.number-=1;
  // }
}
