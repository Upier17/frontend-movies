import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { AddMovieComponent } from './components/add-movie/add-movie';
import { EditMovieComponent } from './components/edit-movie/edit-movie';

export const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'add-movie', component: AddMovieComponent },
  { path: 'movie/edit/:id', component: EditMovieComponent },
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
];


