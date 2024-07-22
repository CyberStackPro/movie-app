// src/services/fakeGenreService.d.ts
export interface Genre {
    _id: string;
    name: string;
}

export const genres: Genre[];

export function getGenres(): Genre[];