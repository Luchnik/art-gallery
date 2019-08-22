import React from 'react';

import './textarea.styles.scss';

const TextArea = ({ name, placeholder, value, onInputChange, ...restProps }) => {
  return (
    <textarea
      className="textarea-field"
      name={name}
      value={value}
      onChange={onInputChange}
      placeholder={placeholder}
      {...restProps}>
    </textarea>
  );
}

export default TextArea;
