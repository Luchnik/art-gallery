import React from 'react';

import './button.styles.scss';

const Button = ({ children, outlineColor, small, styleType, alreadyLiked, ...otherProps }) => {

  let styleTypeClass = '';

  switch (styleType) {
    case 'primary':
      styleTypeClass = 'primary';
      break;
    case 'secondary':
      styleTypeClass = 'secondary';
      break;
    case 'like':
      styleTypeClass = 'like';
      break;
    case 'googleLogIn':
      styleTypeClass = 'google-login';
      break;
    default: styleTypeClass = '';
  }

  return (
    <button
      className={`custom-button ${alreadyLiked ? 'alreadyLiked': ''} ${styleTypeClass} ${small ? 'small' : ''}`}
      {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
