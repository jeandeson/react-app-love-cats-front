import React from "react";
import "./SearchUser.css";
import { BsSearch } from "react-icons/bs";

const SearchUser = ({ handleSearch }) => {
  return (
    <div className="search-user-container">
      <div className="search-user-header">
        <div className="search-user-img">
          <BsSearch />
        </div>
        <input
          onChange={(event) => handleSearch(event.target.value)}
          type="text"
          placeholder="Who you are looking for?"
        />
      </div>
    </div>
  );
};

export default SearchUser;
