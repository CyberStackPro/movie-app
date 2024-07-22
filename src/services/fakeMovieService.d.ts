// src/services/fakeMovieService.d.ts
import { Genre } from "./fakeGenreService.d";


export interface Movies {
    _id: string;
    title: string;
    genre: Genre;
    genreId?: string;
    numberInStock: number;
    dailyRentalRate: number;
    publishDate?: string;
    liked?: boolean
}

export const movies: Movies[];

export function getMovies(): Movies[];

export function getMovie(id: string): Movies | undefined;

export function saveMovie(movie: Partial<Movies>): Movies;

export function deleteMovie(id: string): Movies | undefined;