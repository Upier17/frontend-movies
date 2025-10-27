import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-edit-movie',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit-movie.html',
  styleUrls: ['./edit-movie.css']
})
export class EditMovieComponent implements OnInit {
  movie: Movie = {
    id: 0,
    title: '',
    synopsis: '',
    year: 0,
    cover: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    const movieId = Number(this.route.snapshot.paramMap.get('id'));
    if (!movieId) {
      console.error('ID de película no válido');
      this.router.navigate(['/movies']);
      return;
    }

    this.moviesService.getMovie(movieId).subscribe({
      next: (data) => (this.movie = data),
      error: (err) => {
        console.error('Error al cargar la película', err);
        alert('No se pudo cargar la película 😢');
        this.router.navigate(['/movies']);
      }
    });
  }

  updateMovie(): void {
    if (!this.movie.id) {
      alert('Película no válida');
      return;
    }

    this.moviesService.updateMovie(this.movie.id, this.movie).subscribe({
      next: () => {
        alert('Película actualizada con éxito 🎬');
        this.router.navigate(['/movies']);
      },
      error: (err) => {
        console.error('Error al actualizar película', err);
        alert('No se pudo actualizar la película 😢');
      }
    });
  }
}
