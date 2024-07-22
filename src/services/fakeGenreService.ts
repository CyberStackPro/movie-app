// src/services/fakeGenreService.ts
import { Genre } from "./fakeGenreService.d";

export const genres: Genre[] = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
];

export function getGenres(): Genre[] {
  return genres.filter((g) => g);
}