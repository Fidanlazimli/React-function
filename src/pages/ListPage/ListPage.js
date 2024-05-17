import React from 'react';
import './ListPage.css';
import { useSelector } from 'react-redux';

const ListPage = () => {
  const moviesList = useSelector((state) => state.moviesList);
  const favoriteMovies = useSelector((state) => state.favoriteMovies);

  return (
    <div className="list-page">
      <h1 className="list-page__title">{moviesList.title}</h1>
      <ul>
        {moviesList.movies.map((id) => (
          <li key={id} className="movie__item">
            <a
              rel="noreferrer"
              href={`https://www.imdb.com/title/${id}/`}
              target="_blank"
            >
              {favoriteMovies.map((movie) =>
                id === movie.id ? `${movie.title} (${movie.year})` : null
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;
