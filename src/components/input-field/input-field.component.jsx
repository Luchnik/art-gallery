import React from 'react';

import './input-field.styles.scss';

const InputField = ({ name, type, placeholder, value, onInputChange, ...restProps }) => {
  return (
    <input
      className="input-field"
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onInputChange}
      {...restProps}
    />
  );
}

export default InputField;
