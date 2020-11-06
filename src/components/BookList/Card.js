import React from "react";
import SampleModal from '../SampleModal'
const Card = (props) => {
  const [modal, toggle] = React.useState(false); // controls if modal is open
  const { deleteHandler } = props;
  const { id, img, title, author, price } = props.book

  return (
    <article className="book">
      <img src={img} alt="book" onClick={() => toggle(true)} />
      <h3 className="title" onClick={() => toggle(true)}>
        {title}
      </h3>
      <p className="author">{author}</p>
      <i className="bx bx-x bx-md delete-icon" onClick={() => deleteHandler({ id })}></i>
      <div className="price-cart">
        <p className="price">{price}&#8364;</p>
        <i className="bx bxs-cart-add bx-sm" title="Add to cart"></i>
      </div>
      {modal && <SampleModal close={() => toggle(false)} book={props.book} />}
    </article>
  );
};

export default Card;
