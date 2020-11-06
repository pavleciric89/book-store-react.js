import React, { useState } from "react";
import Card from "./Card";
import BookList from "../../Data";
import "./CardList.css";
import Pagination from "../Pagination/Pagination";
import Paginate from "../utils/Paginate";
import AppLayout from "../AppLayout";
// import { v1 as uuidv1 } from "uuid";

const CardList = () => {
  const [books, setBooks] = useState(BookList);
  const [pageSize] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  const deleteHandler = (id) => {
    const newList = books.filter((book) => book.id !== id);
    setBooks(newList);
  };
  const itemsCount = books.length;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const booksPerPage = () => Paginate(books, currentPage, pageSize);

  console.log(books);

  return (
    <AppLayout>
      <section className="booklist">
        {booksPerPage().map((book) => {
          const { id } = book;
          return (
            <Card
              book={book}
              key={id}
              deleteHandler={() => deleteHandler(id)}
            />
          );
        })}
      </section>

      <Pagination
        itemsCount={itemsCount}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
        books={books}
      />
    </AppLayout>
  );
};
export default CardList;
