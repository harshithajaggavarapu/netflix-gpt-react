import React from "react";
import { IMG_TMDB_URL } from "../utils/constants";

const MovieCard = ({ photoPath }) => {
  if (!photoPath) return null;
  return (
    <div className="pr-4 w-32 md:w-48">
      <img className="" src={IMG_TMDB_URL + photoPath} alt="moviePoster" />
    </div>
  );
};

export default MovieCard;
