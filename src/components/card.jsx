import React from "react";

const Cards = ({ post, handleClick }) => {
  const { title, description, price } = post;

  return (
    <div className="flex-item">
      <ul className="ul">
        <li>
          <p className="post-title">{title}</p>
        </li>
        <li>
          <p className="post-description">{description}</p>
        </li>
        <li>
          <p>Price - ${price}</p>
        </li>
        <li>
          <button id="btn" onClick={() => handleClick(item)}>
            Read more
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Cards;
