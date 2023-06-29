import React, { useState } from 'react';

const SearchBox = ({ searchValue, setSearchValue, onSearch }) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSearch();
    }
  };

  return (
    <div className="col col-sm-4">
      <div className="input-group mb-3">
        <input
          className="form-control"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default SearchBox;
