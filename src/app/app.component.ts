import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoviesService } from './services/movies.service'; 
import { Movie } from './models/movie.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'movies-frontend';
  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe({
      next: (data) => this.movies = data,
      error: (err) => console.error('Error al cargar películas:', err)
    });
  }
}
