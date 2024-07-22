import { MovieGenre, Movies } from "./Movies/MovieTable";
import { Genres } from "./Movies/common/ListGroup";

declare module '../services/fakeMovieService' {
    export function getMovies(): Movies[];
    export function getMovie(id: string): Movies;
    export function saveMovie(movie: MovieGenre): void;
}

declare module '../services/fakeGenreService' {
    export function getGenres(): Genres[];
}
