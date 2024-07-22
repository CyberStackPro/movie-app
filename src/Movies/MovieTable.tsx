import { Link } from "react-router-dom";
import Like from "./common/Like";
import Table from "./common/Table";

import TableHeader, { Columns } from "./common/TableHeader";

export interface MovieGenre {
  _id: string;
  name: string;
}
export interface Movies {
  _id: string;
  title?: string;
  genre?: MovieGenre;
  genreId?: string;
  numberInStock?: number;
  dailyRentalRate?: number;
  liked?: boolean | undefined;
}
export interface SortColumn {
  path: string;
  order: "asc" | "desc";
}
interface Props {
  movies: Movies[];
  onDelete: (move: Movies) => void;
  onLikeMovie: (movie: Movies) => void;
  onSort: (sortColumn: SortColumn) => void;
  sortColumn: SortColumn;
}

const MovieTable = ({
  movies,
  onDelete,
  onLikeMovie,
  onSort,
  sortColumn,
}: Props) => {
  const length = movies.length;
  if (length === 0) return <p>There is no movie in the database</p>;

  const columns: Columns[] = [
    {
      path: "title",
      label: "Title",
      content: (item) => (
        <Link className="text-primary" to={`/movies/${item._id}`}>
          {item.title}
        </Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like movies={movie} onLikeMovie={() => onLikeMovie(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button className="btn btn-danger" onClick={() => onDelete(movie)}>
          Delete
        </button>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        data={movies}
        sortColumns={sortColumn}
        onSort={onSort}
      />
    </>
  );
};

export default MovieTable;
