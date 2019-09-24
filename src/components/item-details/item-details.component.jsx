import React from 'react';

import Rating from '../rating/rating.component';

const ItemDetails = ({ item: { title, price, rating, description } }) => {
  return (
    <React.Fragment>
      <h2 className="title">
        {title}
      </h2>
      <label className="item-rating">
        <Rating rating={rating} />
      </label>
      <label className="price">
        &#8372; {price}
      </label>
      <p className="description">
        {description}
      </p>
    </React.Fragment>
  );
}

export default ItemDetails;
