import "./Searchbar.css";
import React, {useState, useEffect} from "react";
import { Link} from 'react-router-dom'
import Data from '../../Data'



const Book = ({book}) => {
  return <Link to={`/booklist/${book.id}`} style={{border: '1px solid red'}}>{book.author} - {book.title}</Link>
}

const Searchbar = () => {
  const [input, setInput] = useState('')
  

  const filteredData = Data.filter(item => {
    if (input.length <= 2) return; // will prevent search
    const title = item.title.toLowerCase();
    const author = item.author.toLowerCase();
    if (title.includes(input) || author.includes(input))   return item;
    return false
  })
  console.log('Render', filteredData);
  
  return (
    <>
    <div className="search-container">
      <form className="search-form">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text"
          placeholder="Search by title, author or keyword..."
        />
        <button className="btn search-btn">
          Search <i className="bx bx-search-alt-2"></i>
        </button>
        <div className="results">
          {filteredData.map(book => <Book key={book.id} book={book}/>)}
        </div>
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
  
    </>
  );
};

export default Searchbar;
