import React from "react";
import "./MovieItem.css";
import { useDispatch } from "react-redux";
import { addMovieToFavorites } from "../../redux/action";

const MovieItem = ({ Title, Year, Poster, imdbID }) => {
  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    dispatch(addMovieToFavorites(imdbID, Title, Year));
  };

  return (
    <article className="movie-item">
      <img className="movie-item__poster" src={Poster} alt={Title} />
      <div className="movie-item__info">
        <h3 className="movie-item__title">
          {Title}&nbsp;({Year})
        </h3>
        <button
          onClick={handleAddToFavorites}
          type="button"
          className="movie-item__add-button"
        >
          Siyahıya əlavə edin
        </button>
      </div>
    </article>
  );
};

export default MovieItem;
