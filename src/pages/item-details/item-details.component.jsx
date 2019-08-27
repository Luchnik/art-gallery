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
    isEditing: false,
    isMineItem: false,
    alreadyLiked: false
  };

  componentDidMount = () => {
    this.getItemDetails();
  };

  componentDidUpdate = ( prevProps ) => {
    prevProps.currentUser !== this.props.currentUser && this.getItemDetails();
  };

  getItemDetails = async () => {
    const { currentUser, match } = this.props;
    const { artistId, itemId } = match.params;

    let docPath = '';
    if ( artistId && itemId ) {
      docPath = `Users/${artistId}/Gallery/${itemId}`;
    } else if (currentUser) {
      docPath = `Users/${currentUser.id}/Gallery/${itemId}`;
    } else {
      return;
    }

    if (currentUser) {
      try {
        const itemRef = firestore.doc(docPath);
        const doc = await itemRef.get();
        const item = { ...doc.data() }
        const alreadyLiked = item.likedBy.includes(currentUser.id);

        doc.exists && this.setState({
          item,
          loading: false,
          isMineItem: !artistId,
          alreadyLiked
        });
      } catch (error) {
        console.error(error);
      }
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

  updateArtistsRating = async addRating => {
    const { match } = this.props;
    const artistId = match.params.artistId;

    try {
      const artistRef = firestore.doc(`Users/${artistId}`);
      const doc = await artistRef.get();
      const artistsData = { ...doc.data() };
      artistsData.rating = artistsData.rating + addRating;
      await artistRef.update(artistsData);
    } catch (error) {
      console.error(error);
    }
  };

  toggleLike = async () => {
    const { currentUser, match } = this.props;
    const { artistId, itemId } = match.params;

    try {
      const itemRef = firestore.doc(`Users/${artistId}/Gallery/${itemId}`);
      const ratedItem = { ...this.state.item };

      let addRating = 0;

      if (ratedItem.likedBy.includes(currentUser.id)) {
        ratedItem.likedBy = ratedItem.likedBy.filter( value => {
          return value !== currentUser.id;
        });
        addRating--;
      } else {
        ratedItem.likedBy = ratedItem.likedBy.concat(currentUser.id);
        addRating++;
      }

      ratedItem.rating = ratedItem.likedBy.length;   
      await itemRef.update(ratedItem);

      this.setState(prevState => ({
        item: ratedItem,
        alreadyLiked: !prevState.alreadyLiked
      }));

      this.updateArtistsRating(addRating);
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = $event => {
    const { name, value } = $event.target;
    const item = { ...this.state.item };
    item[ name ] = value;
    this.setState({ item });
  };

  renderItemEdit = () => {
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

  renderItemDetails = () => {
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

  renderActionButtons = () => {
    const { isMineItem, isEditing, alreadyLiked } = this.state;

    if ( isMineItem ) {
      return (
        <React.Fragment>
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
        </React.Fragment>
      );
    }

    if ( !isMineItem && this.props.currentUser ) {
      return (
        <Button
          type="submit"
          onClick={() => this.toggleLike()}
          small
          alreadyLiked={alreadyLiked}
          styleType="like">
          {alreadyLiked ? 'Dislike It' : 'Like It'}
        </Button>
      );
    }
  };

  render() {
    const { item: { imageUrl }, loading, isEditing } = this.state;

    if ( loading ) {
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
          {isEditing ? this.renderItemEdit() : this.renderItemDetails()}
          <div className="action-buttons">
            { this.renderActionButtons() }
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withCurrentUser(ItemDetails));
