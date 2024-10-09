import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgClass, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  //Variables para clases dinamicas
  isDark: boolean = true;
  //Variables para formularios reactivos
  movieForm: FormGroup;
  name: FormControl;
  duration: FormControl;
  director: FormControl;

  constructor()
  {
    this.name = new FormControl('', Validators.required);
    this.duration= new FormControl('', [Validators.required, Validators.max(4)]);
    this.director = new FormControl('', Validators.required); 
    this.movieForm = new FormGroup( //Necesita un objeto
      {
        name:this.name,
        duration:this.duration,
        director: this.director
      })
  }
  handleSubmit() : void //Metodo que solo muestra el formulario en un mensaje de alerta 
  {
    // Aquí convertimos el valor del formulario a una cadena
    const formValue = JSON.stringify(this.movieForm.value, null, 2);
    alert(formValue); // Usar alert para mostrar el objeto
    this.movieForm.reset(); //Limpia despues de mandar el dormulario
  }

  toggleDark()
  {
    this.isDark = !this.isDark;
  }
}
