import React from 'react';

import './item.styles.scss';

const Item = ({ title, price, imageUrl }) => {
  return (
    <div className="item-container">
      <div
        className="item-preview"
        style={{
          backgroundImage: `url(${imageUrl})`
        }} />

      <div className="item-details">
        <div className="title">{title.toUpperCase()}</div>
        <div className="price">&#8372;{price}</div>
      </div>
    </div>
  );
}

export default Item;
