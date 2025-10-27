import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 Necesario para *ngIf, *ngFor si lo usaras
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  standalone: true,        // 👈 Esto indica que es un componente independiente
  imports: [CommonModule]  // 👈 Importamos CommonModule para directivas como *ngIf
})
export class MovieComponent implements OnInit {
  movie: Movie | null = null;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadMovie(id);
  }

  loadMovie(id: number): void {
    this.moviesService.getMovie(id).subscribe({
      next: (data) => {
        this.movie = data;
        console.log('Detalle de película cargado:', this.movie);
      },
      error: (error) => {
        console.error('Error al cargar la película:', error);
      }
    });
  }
}
