import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit { //El OnInit sirve para los servicios o cosas que necesitamos que se creen despues del constructor
  constructor()
  {
    console.log("Metodo que se ejecuta primero")
  }
  
  ngOnInit(): void 
  {
    console.log("Metodo que se ejecuta despues del contructor")
  }
}
