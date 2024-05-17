import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { findMovies } from '../../redux/action';
import './SearchBox.css';

const SearchBox = () => {
  const [searchLine, setSearchLine] = useState('');
  const dispatch = useDispatch();

  const searchLineChangeHandler = (e) => {
    setSearchLine(e.target.value.trim());
  };

  const searchBoxSubmitHandler = (e) => {
    e.preventDefault();
    if (searchLine) {
      dispatch(findMovies(searchLine));
    }
  };

  return (
    <div className="search-box">
      <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
        <label className="search-box__form-label">
          Filmi başlığa görə axtarın:
          <input
            value={searchLine}
            type="text"
            className="search-box__form-input"
            placeholder="Nümunə, Shawshank Redemption"
            onChange={searchLineChangeHandler}
          />
        </label>
        <button
          type="submit"
          className="search-box__form-submit"
          disabled={!searchLine}
        >
          Axtar
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
