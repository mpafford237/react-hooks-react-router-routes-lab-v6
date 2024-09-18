import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      {/* Change the text inside the Link to "View Info" */}
      <Link to={`/movie/${movie.id}`}>View Info</Link>  {/* Updated here */}
    </div>
  );
};

export default MovieCard;