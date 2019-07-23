import React from 'react';
import { withRouter } from 'react-router-dom';

import './item.styles.scss';

const Item = ({ itemId, title, price, imageUrl, history, match }) => {
  return (
    <div
      className="item-container"
      onClick={() => history.push(`${match.url}${itemId}`)}>
      <div
        className="item-preview"
        style={{
          backgroundImage: `url(${imageUrl})`
        }} />

      <div className="item-details">
        <div className="title">{title}</div>
        <div className="price">&#8372;{price}</div>
      </div>
    </div>
  );
}

export default withRouter(Item);
