import React, { useState } from "react";
import Card from "./Card";
import BookList from "../../Data";
import "./CardList.css";
import Pagination from "../Pagination/Pagination";
import Paginate from "../utils/Paginate";
import ModalDetails from "../ModalDetails/ModalDetails";
// import { v1 as uuidv1 } from "uuid";

const CardList = () => {
  const [books, setBooks] = useState(BookList);
  const [pageSize] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedId, setSelectedId] = useState(null);

  const deleteHandler = (id) => {
    const newList = books.filter((book) => book.id !== id);
    setBooks(newList);
  };
  const itemsCount = books.length;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const booksPerPage = () => Paginate(books, currentPage, pageSize);

  const modalRef = React.useRef();

  const openModal = (id) => {
    modalRef.current.openModal();
    setSelectedId(id);
  };
  const close = () => {
    modalRef.current.close();
  };

  return (
    <React.Fragment>
      <section className="booklist">
        {booksPerPage().map((book) => {
          const { id, img, title, author, price } = book;
          return (
            <Card
              img={img}
              title={title}
              author={author}
              price={price}
              key={id}
              deleteHandler={() => deleteHandler(id)}
              openModal={() => openModal()}
              closeModal={() => close()}
            />
          );
        })}
      </section>
      <ModalDetails
        ref={modalRef}
        data={booksPerPage}
        selectedId={selectedId}
      />
      <Pagination
        itemsCount={itemsCount}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
        books={books}
      />
    </React.Fragment>
  );
};
export default CardList;
