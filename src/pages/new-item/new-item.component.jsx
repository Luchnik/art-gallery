import React from 'react';
import { withRouter } from 'react-router-dom';

import InputField from '../../components/input-field/input-field.component';
import Button from '../../components/button/button.component';
import TextArea from '../../components/textarea/textarea.component';
import { firestore } from '../../firebase/firestore';
import { auth } from '../../firebase/auth';
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

    try {
      const userId = auth.currentUser.uid;
      await firestore.collection(`/Users/${userId}/Gallery`).add(this.state);
      this.props.history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  resetFields = () => {
    this.setState({ ...this.initialFormState });
  };

  render() {
    const { title, price, imageUrl, description } = this.state;

    return (
      <form
        className="new-item-form"
        onSubmit={this.handleSubmit}>

        <div className="form-head">
          <h2>Add new piece</h2>
          <div className="button-group">
            <Button
              type="submit"
              small
              styleType="primary">
              Add
            </Button>
            <Button
              type="button"
              small
              onClick={() => this.resetFields() }
              styleType="secondary">
              Clear
            </Button>
          </div>
        </div>

        <div className="inputs-container">
          <div className="inputs">
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
        </div>
      </form>
    );
  }
}

export default withRouter(NewItem);
