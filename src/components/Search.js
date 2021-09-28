import React from "react";

function Search({ searchInput, setSearchInput }) {

  function handleSearchChange(e) {
    setSearchInput(e.target.value);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={searchInput}
        placeholder="Type a name to search..."
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;
