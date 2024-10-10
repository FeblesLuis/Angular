import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-form',
  standalone: true,
  imports: [NgClass, RouterOutlet, ReactiveFormsModule],
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.css'
})
export class MovieFormComponent 
{
  //Variables para clases dinamicas
  isDark: boolean = true;
  //Variables para formularios reactivos
  movieForm: FormGroup;
  name: FormControl;
  duration: FormControl;
  director: FormControl;

  constructor(public movieService: MovieService)
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
    const formValue = JSON.stringify(this.movieForm.value, null, 2);
    alert(formValue); 
    this.movieService.addMovie(this.movieForm.value) //Agregamos el servicio a la lista de movies de las pages
    this.movieForm.reset(); 
  }
}
