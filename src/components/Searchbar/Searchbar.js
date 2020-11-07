import "./Searchbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Data from "../../Data";

const Book = ({ book }) => {
  return (
    <Link to={`/booklist/${book.id}`}>
      <li className="filtered-books">
        {book.author} - {book.title}
        <img className="filtered-thumbnail" src={book.img} alt="" />
      </li>
    </Link>
  );
};

const Searchbar = () => {
  const [input, setInput] = useState("");

  const filteredData = Data.filter((item) => {
    if (input.length <= 2) return null; // will prevent search
    const title = item.title.toLowerCase();
    const author = item.author.toLowerCase();
    if (title.includes(input) || author.includes(input)) return item;
    return false;
  });
  console.log("Render", filteredData);

  return (
    <>
      <div className="search-container">
        <form className="search-form">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Search by title, author or keyword..."
          />
          <button className="btn search-btn">
            Search <i className="bx bx-search-alt-2"></i>
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
      <ul className="results-container">
        {filteredData.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </ul>
    </>
  );
};

export default Searchbar;
