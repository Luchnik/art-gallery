import React from 'react';

import InputField from '../../components/input-field/input-field.component';
import Button from '../../components/button/button.component';
import TextArea from '../../components/textarea/textarea.component';
import './new-item.styles.scss';

class NewItem extends React.PureComponent {

  initialFormState = {
    title: '',
    price: '',
    imageUrl: '',
    description: ''
  };

  state = {
    ...this.initialFormState
  };

  handleChange = $event => {
    const { name, value } = $event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async $event => {
    $event.preventDefault();

    console.log(this.state);
  };

  resetFields = () => {
    this.setState({ ...this.initialFormState });
  };

  render() {
    const { title, price, imageUrl, description } = this.state;

    return (
      <div className="new-item-container">

        <h2>Add new item</h2>
        <form
          className="new-item-form"
          onSubmit={this.handleSubmit}>
          <div className="inputs-container">
            <InputField
              name="title"
              type="text"
              placeholder="Title"
              value={title}
              onInputChange={this.handleChange}
              required />
            <InputField
              min="0"
              name="price"
              type="number"
              placeholder="Price"
              value={price}
              onInputChange={this.handleChange}
              required />
            <InputField
              name="imageUrl"
              type="text"
              placeholder="Image URL"
              value={imageUrl}
              onInputChange={this.handleChange}
              required />
          </div>
          <div className="description-container">
            <TextArea
              name="description"
              placeholder="Description"
              value={description}
              onInputChange={this.handleChange}
              required />
          </div>
          <div className="button-group">
            <Button
              type="submit"
              styleType="primary">
              Add
            </Button>
            <Button
              type="button"
              onClick={() => this.resetFields() }
              styleType="secondary">
              Clear
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewItem;
