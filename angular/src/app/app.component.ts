import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Product from './models/Product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName: string;
  number : number;
  product: Product;
  productEj: any; //Si no declaramos nada Angular dice que esto es un objeto

  constructor() //Constrcutor de la clase
  {
    this.userName = 'Felipe';
    this.number = 27;
    this.product = //Producto de un interface de models 
    {
      name: "Computer",
      price: 2000,
      isForSale: true
    }

    this.productEj = //Declaracion del objeto
    {
      prueba:"Hola soy un obj creado sin estructura"
    }
  }
}
