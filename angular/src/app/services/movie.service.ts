import { Injectable } from '@angular/core';
import Movie from '../models/Movie'
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie[]
  constructor() 
  {
    this.movies = 
    [
      {
        name: "Star Wars",
        duration: 4,
        director:"George Lucas"
      },
      {
        name: "La naranja mecanica",
        duration: 4,
        director:"Stanley Kubrick"
      }
    ]
  }
  addMovie(movie:Movie):void
  {
    this.movies.push(movie)
  }

  getMovie(name:string): Movie | undefined
  {
    return this.movies.find((movie) => movie.name === name);
  }
}
