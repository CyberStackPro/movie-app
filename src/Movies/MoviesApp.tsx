import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "./utils/paginate";
import Pagination from "./common/Pagination";
import ListGroup, { Genres } from "./common/ListGroup";
import MovieTable, { Movies, SortColumn } from "./MovieTable";
import SearchInput from "../components/SearchInput";

const MoviesApp = () => {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [genres, setGenres] = useState<Genres[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState<SortColumn>({
    path: "title",
    order: "asc",
  });

  useEffect(() => {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    setMovies(getMovies());
    setGenres(genres);
  }, []);

  const getPageData = () => {
    let filteredMovies = movies;

    if (searchQuery) {
      filteredMovies = movies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (selectedGenre && selectedGenre._id) {
      filteredMovies = movies.filter((m) => m.genre._id === selectedGenre._id);
    }

    const sorted = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );

    const paginatedMovies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filteredMovies.length, data: paginatedMovies };
  };

  const handleDeleteMovie = (movie: Movies) => {
    setMovies(movies.filter((m) => m._id !== movie._id));
  };

  const handleLikeMovie = (movie: Movies) => {
    const updatedMovies = [...movies];
    const index = updatedMovies.indexOf(movie);
    updatedMovies[index] = {
      ...updatedMovies[index],
      liked: !updatedMovies[index].liked,
    };
    setMovies(updatedMovies);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleGenreSelect = (genre: Genres) => {
    setSelectedGenre(genre);
    setSearchQuery("");
    setCurrentPage(1);
  };

  const handleSort = (sortColumn: SortColumn) => {
    setSortColumn(sortColumn);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedGenre(null);
    setCurrentPage(1);
  };

  const { data, totalCount } = getPageData();

  return (
    <main className="container">
      <div className="row">
        <div className="col-2">
          <ListGroup
            genres={genres}
            onSelectGenres={handleGenreSelect}
            selectedItem={selectedGenre as Genres}
          />
        </div>

        <div className="col">
          <Link to="/movies/new" className="btn btn-primary mb-2">
            New Movie
          </Link>

          <p>Showing {totalCount} movies in the database</p>

          <SearchInput value={searchQuery} onChange={handleSearch} />

          <MovieTable
            sortColumn={sortColumn}
            onLikeMovie={handleLikeMovie}
            movies={data}
            onDelete={handleDeleteMovie}
            onSort={handleSort}
          />
          <Pagination
            currentPage={currentPage}
            ItemsCount={totalCount}
            pageSize={pageSize}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </main>
  );
};

export default MoviesApp;
