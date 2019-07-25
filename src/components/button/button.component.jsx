import React from 'react';

import './button.styles.scss';

const Button = ({ children, outlineColor, googleLogIn, ...otherProps }) => {
  return (
    <button
      className={`custom-button ${googleLogIn ? 'google-login' : ''}`}
      {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
