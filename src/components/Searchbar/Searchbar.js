import "./Searchbar.css";
import React from "react";

const Searchbar = () => {
  return (
    <div className="search-container">
      <form className="search-form">
        <input
          type="text"
          placeholder="Search by title, author or keyword..."
        />
        <button className="btn search-btn">
          Search <i class="bx bx-search-alt-2"></i>
        </button>
      </form>
      <select name="" id="" className="select">
        <option value="0">All Categories</option>
        <option value="1">Science Fiction</option>
        <option value="2">Family</option>
        <option value="3">History</option>
        <option value="4">Cookbook</option>
        <option value="5">Biographies</option>
        <option value="6">Kids</option>
      </select>
    </div>
  );
};

export default Searchbar;
