import React from 'react';

import InputField from '../input-field/input-field.component';
import TextArea from '../textarea/textarea.component'; 
import './item-edit.styles.scss';

const ItemEdit = ({ item: { title, price, imageUrl, description }, handleChange }) => {
  return (
    <div className="editing-container">
      <h2 className="title">
        <InputField
          name="title"
          type="text"
          placeholder="Title"
          value={title}
          onInputChange={( $event ) => handleChange( $event )}
          required />
        <InputField
          min="0"
          name="price"
          type="number"
          placeholder="Price"
          value={price}
          onInputChange={( $event ) => handleChange( $event )}
          required />
        <InputField
          name="imageUrl"
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onInputChange={( $event ) => handleChange( $event )}
          required />
        <div className="text-area-container">
          <TextArea
            name="description"
            placeholder="Description"
            value={description}
            onInputChange={( $event ) => handleChange( $event )}
            required />
        </div>
      </h2>
    </div>
  );
}

export default ItemEdit;
