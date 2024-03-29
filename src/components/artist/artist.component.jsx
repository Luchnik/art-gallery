import React from 'react';

import Rating from '../rating/rating.component';
import './artist.styles.scss';

const Artist = ({ userId, artistId, displayName, email, createdAt, rating, onNameClick }) => {
  return (
    <div className="artist">
      <div className="user-rating">
        <Rating rating={rating} />
      </div>
      <div className="display-name">
        <span
          className="value"
          onClick={() => onNameClick(artistId)}>
          {displayName}
        </span>
        <span className="indicator">{userId === artistId ? ' (you)' : ''}</span>
      </div>
      <div className="email">
        {email}
      </div>
      <div className="created-at">
        {new Date(createdAt.seconds * 1000).toDateString()}
      </div>
    </div>
  );
}

export default Artist;
