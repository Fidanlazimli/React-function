import React, { useState, useEffect } from "react";
import "./Favorites.css";
import { useDispatch, useSelector } from "react-redux";
import { removeMovieFromFavorites, getMoviesInList } from "../../redux/action";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [title, setTitle] = useState("");
  const [btnActive, setBtnActive] = useState(false);
  const [listId, setListId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const favoriteMovies = useSelector((state) => state.favoriteMovies);
  const dispatch = useDispatch();

  const onInputEnter = (e) => {
    setTitle(e.target.value);
  };

  const postMovies = () => {
    if (title.trim() !== '') {
      setIsLoading(true);
      setBtnActive(true);
      fetch("https://acb-api.algoritmika.org/api/movies/list", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          movies: favoriteMovies.map((item) => item.id),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setListId(data.id);
          setIsLoading(false);
        });
    }
  };

  useEffect(() => {
    if (listId !== "") {
      dispatch(getMoviesInList(listId));
    }
  }, [listId, dispatch]);

  return (
    <div className="favorites">
      <input
        onChange={onInputEnter}
        value={title}
        className="favorites__name"
        placeholder="Siyahıya ad verin"
      />
      <ul className="favorites__list">
        {favoriteMovies.map((item) => (
          <li className="list__item" key={item.id}>
            {item.title} ({item.year}){" "}
            {!btnActive && (
              <button
                onClick={() => dispatch(removeMovieFromFavorites(item.id))}
                className="close__btn"
              >
                X
              </button>
            )}
          </li>
        ))}
      </ul>
      {listId === "" ? (
        <button
          disabled={
            title === "" || favoriteMovies.length === 0 || isLoading
          }
          onClick={postMovies}
          type="button"
          className="favorites__save"
        >
          {isLoading ? "Yüklənir..." : "Siyahını saxla"}
        </button>
      ) : (
        <Link to={`/list/${listId}`}>Siyahıya keçin</Link>
      )}
    </div>
  );
};

export default Favorites;
