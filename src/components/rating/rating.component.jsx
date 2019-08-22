import React from 'react';

import './rating.styles.scss';

const Rating = ({ rating }) => {
  return <span className="rating">&#9733; {rating}</span>
}

export default Rating;
