import React, { ReactNode, useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Movies } from "../MovieTable";

interface Props {
  onLikeMovie: (movie: Movies) => void;
  //   liked: boolean | undefined;
  movies: Movies;
}
const Like = ({ onLikeMovie, movies }: Props) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = (movie: Movies) => {
    setIsLiked(true);
    onLikeMovie(movie);
    setTimeout(() => setIsLiked(false), 300);
  };
  return (
    <button
      className={`text-3xl transition-all duration-200 ${
        isLiked ? "animate-ping" : ""
      }`}
      onClick={() => handleLikeClick(movies)}
    >
      {!movies.liked ? <BsHeart /> : <BsHeartFill className="text-red-500" />}
    </button>
  );
};

export default Like;
