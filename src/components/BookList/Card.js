import React from "react";

const Card = (props) => {
  const { id, img, title, author, price, deleteHandler } = props;
  return (
    <article className="book">
      <img src={img} alt="book" />
      <h3 className="title">{title}</h3>
      <p className="author">{author}</p>
      <i className="bx bx-x bx-md" onClick={() => deleteHandler({ id })}></i>
      <p className="price">{price}&#8364;</p>
    </article>
  );
};

export default Card;
