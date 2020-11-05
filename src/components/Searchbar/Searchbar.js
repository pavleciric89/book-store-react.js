import "./Searchbar.css";
import React from "react";
import { useSelector, useDispatch} from 'react-redux';


const Searchbar = () => {
  const dispatch = useDispatch();
  
  const books = useSelector(state => {
    return state.books.data
  })
  
  console.log('Books in Searchbar', books)
  return (
    <div className="search-container">
      <form className="search-form">
        <input
          type="text"
          placeholder="Search by title, author or keyword..."
        />
        <button className="btn search-btn" >
          Search <i className="bx bx-search-alt-2"></i>
        </button>
      </form>
      <select name="" id="" className="select" onClick={() => dispatch({type: 'BOOK/REMOVE', id: 1})}>
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
