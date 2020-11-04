import React from "react";

const Card = (props) => {
  const { id, img, title, author, price, deleteHandler, openModal } = props;

  return (
    <article className="book">
      <img src={img} alt="book" onClick={() => openModal({ id })} />
      <h3 className="title" onClick={() => openModal({ id })}>
        {title}
      </h3>
      <p className="author">{author}</p>
      <i className="bx bx-x bx-md" onClick={() => deleteHandler({ id })}></i>
      <div className="price-cart">
        <p className="price">{price}&#8364;</p>
        <i className="bx bxs-cart-add bx-sm" title="Add to cart"></i>
      </div>
    </article>
  );
};

export default Card;
