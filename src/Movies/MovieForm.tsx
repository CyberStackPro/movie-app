import React, { useState, useEffect, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Movies } from "./MovieTable";
import { getGenres } from "../services/fakeGenreService";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import Input from "./common/Input";
import { Genres } from "./common/ListGroup";

interface MovieFormState {
  _id?: string;
  title: string;
  genreId: string;
  numberInStock: number;
  dailyRentalRate: number;
}
const MovieForm = () => {
  const [data, setData] = useState<MovieFormState>({
    title: "",
    genreId: "",
    numberInStock: 0,
    dailyRentalRate: 0,
  });
  const [genres, setGenres] = useState<Genres[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { id } = useParams<{ id: any }>();
  const navigate = useNavigate();

  useEffect(() => {
    const genres = getGenres();
    setGenres(genres);

    if (id === "new") return;

    const movie = getMovie(id);

    if (!movie) return navigate("/not-found");
    setData({
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    });
  }, [id, navigate]);

  const validate = () => {
    const errors: { [key: string]: string } = {};

    if (data.title.trim() === "") errors.title = "Title is required.";
    if (data.genreId.trim() === "") errors.genreId = "Genre is required.";
    if (data.numberInStock < 0 || data.numberInStock > 100)
      errors.numberInStock = "Number in Stock must be between 0 and 100.";
    if (data.dailyRentalRate < 0 || data.dailyRentalRate > 10)
      errors.dailyRentalRate = "Rate must be between 0 and 10.";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const errors = validate();
    setErrors(errors || {});
    if (errors) return;

    saveMovie(data);
    navigate("/movies");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const renderInput = (name: string, label: string, type = "text") => {
    return (
      <Input
        name={name}
        label={label}
        type={type}
        value={(data as any)[name]}
        onChange={handleChange}
        error={errors[name]}
      />
    );
  };

  const renderSelect = (name: string, label: string, options: Genres[]) => {
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <select
          name={name}
          id={name}
          value={(data as any)[name]}
          onChange={handleChange}
          className="form-control"
        >
          <option value="" />
          {options.map((option) => (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          ))}
        </select>
        {errors[name] && (
          <div className="alert alert-danger">{errors[name]}</div>
        )}
      </div>
    );
  };

  return (
    <div>
      <h1>Movie Form</h1>
      <form onSubmit={handleSubmit}>
        {renderInput("title", "Title")}
        {renderSelect("genreId", "Genre", genres)}
        {renderInput("numberInStock", "Number in Stock", "number")}
        {renderInput("dailyRentalRate", "Rate", "number")}
        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default MovieForm;
