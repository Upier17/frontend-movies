import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoviesService } from '../../services/movies.service';
import { Router, RouterModule } from '@angular/router';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './add-movie.html',
  styleUrls: ['./add-movie.css'],
  providers: [] // ✅ No es necesario agregar MoviesService aquí si ya tiene providedIn: 'root'
})
export class AddMovieComponent {
  newMovie: Movie = {
    id: 0,
    title: '',
    synopsis: '',
    year: 0,
    cover: ''
  };

  constructor(private moviesService: MoviesService, private router: Router) {}

  addMovie(): void {
    // Nos aseguramos que el año sea number
    this.newMovie.year = Number(this.newMovie.year);

    this.moviesService.createMovie(this.newMovie).subscribe({
      next: () => {
        this.router.navigate(['/movies']);
      },
      error: (err) => {
        console.error('Error al agregar película:', err);
      }
    });
  }
}
