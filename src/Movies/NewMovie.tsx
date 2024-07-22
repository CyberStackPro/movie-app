import React, { useState } from "react";
import Input from "./common/Input";
import { Movies } from "./MovieTable";
import { Genres } from "./common/ListGroup";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  movies: Movies;
  genre: Genres[];
}
interface NewMovieProps {
  onAddMovie: (movie: Movies) => void;
}
const NewMovie = ({ onAddMovie }: NewMovieProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { genres } = location.state || { movies: [], genres: [] };
  const [newMovie, setNewMovie] = useState({
    _id: "",
    title: "",
    genreId: "",
    numberInStock: 0,
    rate: 0,
    liked: false,
    genres: [],
    errors: [],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Process the form submission logic here
    onAddMovie(newMovie);
    // navigate("/");
  };
  const renderInput = (name: string, label: string, type: string) => {
    return (
      <Input
        name={name}
        label={label}
        type={type}
        onChange={handleChange}
        value={(newMovie as any)[name]}
      />
    );
  };
  const renderButton = (label: string) => {
    return <button className="btn btn-primary">{label}</button>;
  };
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {renderInput("title", "Title", "text")}
      <div className="form-group">
        <label htmlFor="genre">Genres</label>
        <select
          className="form-select"
          name="genre"
          id="genre"
          value={newMovie.genre}
          onChange={handleChange}
        >
          {genres.map((g) => (
            <option key={g._id} value={g.name}>
              {g.name}
            </option>
          ))}
        </select>
      </div>
      {renderInput("numberInStock", "Number in Stock", "number")}
      {renderInput("rate", "Rate", "number")}
      {renderButton("Save")}
    </form>
  );
};

export default NewMovie;
