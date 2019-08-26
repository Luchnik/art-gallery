import React from 'react';
import { withRouter } from 'react-router-dom';

import Spinner from '../../components/spinner/spinner.component';
import Rating from '../../components/rating/rating.component';
import Button from '../../components/button/button.component';
import TextArea from '../../components/textarea/textarea.component';
import InputField from '../../components/input-field/input-field.component';
import { firestore } from '../../firebase/firestore';
import { withCurrentUser } from '../../hocs';
import './item-details.styles.scss';

class ItemDetails extends React.PureComponent {

  state = {
    item: {},
    loading: true,
    isEditing: false
  };

  componentDidMount = () => {
    const { currentUser } = this.props;
    currentUser && this.getItemDetails();
  };

  componentDidUpdate = ( prevProps ) => {
    prevProps.currentUser !== this.props.currentUser && this.getItemDetails();
  };

  getItemDetails = async () => {
    const { currentUser, match } = this.props;
    const itemId = match.params.itemId;

    try {
      const itemRef = firestore.doc(`Users/${currentUser.id}/Gallery/${itemId}`);
      const doc = await itemRef.get();
      doc.exists && this.setState({
        item: { ...doc.data() },
        loading: false
      });
    } catch (error) {
      console.error(error);
    }
  };

  deleteItem = async () => {
    const { currentUser, history, match } = this.props;
    const itemId = match.params.itemId;

    try {
      await firestore.doc(`Users/${currentUser.id}/Gallery/${itemId}`).delete();
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  showItemDetails = () => {
    const { item: { title, price, rating, description } } = this.state;
    return (
      <React.Fragment>
        <h2 className="title">
          {title}
        </h2>
        <label className="item-rating">
          <Rating rating={rating} />
        </label>
        <label className="price">
          &#8372; {price}
        </label>
        <p className="description">
          {description}
        </p>
      </React.Fragment>
    );
  };

  editItem = async () => {
    if (this.state.isEditing) {
      const { currentUser, match } = this.props;
      const itemId = match.params.itemId;

      try {
        const itemRef = firestore.doc(`Users/${currentUser.id}/Gallery/${itemId}`);
        await itemRef.update(this.state.item);
      } catch (error) {
        console.error(error);
      }
    }

    this.setState(prevState => ({
      isEditing: !prevState.isEditing
    }));
  };

  handleChange = $event => {
    const { name, value } = $event.target;
    const item = { ...this.state.item };
    item[ name ] = value;
    this.setState({ item });
  };

  showItemEdit = () => {
    const { item: { title, price, imageUrl, description } } = this.state;
    return (
      <div className="editing-container">
        <h2 className="title">
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
          <div className="text-area-container">
            <TextArea
              name="description"
              placeholder="Description"
              value={description}
              onInputChange={this.handleChange}
              required />
          </div>
        </h2>
      </div>
    );
  };

  render() {
    const { item: { imageUrl }, loading, isEditing } = this.state;
    const { currentUser } = this.props;

    if ( loading || !currentUser ) {
      return <Spinner />
    }

    return (
      <div className="item-details-container">
        <div
          className="image-container"
          style={{
            backgroundImage: `url(${imageUrl})`,
            opacity: isEditing ? 0.3 : 1
          }} />

        <div className="item-description">
          {isEditing ? this.showItemEdit() : this.showItemDetails()}
          <div className="action-buttons">
            <Button
              type="submit"
              onClick={() => this.editItem()}
              small
              styleType="secondary">
              {isEditing ? 'Done' : 'Edit'}
            </Button>
            <Button
              type="submit"
              onClick={() => this.deleteItem()}
              small
              styleType="primary">
              Delete
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withCurrentUser(ItemDetails));
