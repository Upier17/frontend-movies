import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // IMPORTANTE para routerLink
import { MoviesService } from '../services/movies.service';
import { Movie } from '../models/movie.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],  // 👈 solo una vez cada import
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.moviesService.getMovies().subscribe({
      next: (data) => {
        this.movies = data;
        console.log('Películas cargadas:', this.movies);
      },
      error: (error) => {
        console.error('Error al cargar películas:', error);
      }
    });
  }
}
