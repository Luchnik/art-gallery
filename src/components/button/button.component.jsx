import React from 'react';

import './button.styles.scss';

const Button = ({ children, outlineColor, small, styleType, ...otherProps }) => {

  let styleTypeClass = '';

  switch (styleType) {
    case 'primary':
        styleTypeClass = 'primary';
        break;
    case 'secondary':
        styleTypeClass = 'secondary';
        break;
    case 'googleLogIn':
        styleTypeClass = 'google-login';
        break;
    default: styleTypeClass = '';
  }

  return (
    <button
      className={`custom-button ${styleTypeClass} ${small ? 'small' : ''}`}
      {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
