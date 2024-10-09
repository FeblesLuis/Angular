import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { Animals} from './models/animals';
import { ChildComponent } from './components/child/child.component';
import { Child2Component } from './components/child2/child2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FormsModule, ChildComponent, Child2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { //Esto es como una clase 
  title = 'angular';
  userName: string = 'Felipe'; //Variables del codigo
  number:number = 0;
  movies: string[] = ['El conjuro','Star Wars','Pinocho', 'Lord of the rings'];
  animals: Animals = new Animals(); //Esto es de un model 
  herencia: string = "Mensaje del padre al hijo CON variable"

  getAnimalList() {
    return this.animals.getAnimals(); // Devuelve la lista de animales
  }
  addOne() //Metodo
  {
    this.number++
  }

  setName(ev: any)
  {
    this.userName= ev;
  }
}
