import React from 'react';

import InputField from '../../components/input-field/input-field.component';
import Button from '../../components/button/button.component';
import './new-item.styles.scss';

class NewItem extends React.PureComponent {
  state = {
    title: '',
    price: ''
  };

  handleChange = $event => {
    const { name, value } = $event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async $event => {
    $event.preventDefault();
  };

  render() {
    const { title, price } = this.state;

    return (
      <div className="new-item-container">

        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>

        <h2>Add new item</h2>
        <form onSubmit={this.handleSubmit}>
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
          <Button type="submit">
            Add
          </Button>
        </form>
      </div>
    );
  }
}

export default NewItem;
