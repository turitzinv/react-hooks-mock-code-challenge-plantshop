import React from "react";

function Search({ onSearchFilter, search }) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={(e) => onSearchFilter(e.target.value)}
      />
    </div>
  );
}

export default Search;
