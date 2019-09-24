import React from 'react';
import { withRouter } from 'react-router-dom';

import Spinner from '../../components/spinner/spinner.component';
import ActionButtons from '../../components/action-buttons/action-buttons.component';
import ItemEdit from '../../components/item-edit/item-edit.component';
import ItemDetails from '../../components/item-details/item-details.component';
import documents from '../../firebase/documents';
import { withCurrentUser } from '../../hocs';
import './item.styles.scss';

class Item extends React.PureComponent {

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

    try {
      const item = await documents.getDocument(docPath);
      const alreadyLiked = currentUser ? item.likedBy.includes(currentUser.id) : false;
      this.setState({
        item,
        loading: false,
        isMineItem: !artistId,
        alreadyLiked
      });
    } catch (error) {
      console.error(error);
    }
  };

  deleteItem = async () => {
    const { currentUser, history, match } = this.props;
    const itemId = match.params.itemId;
    const documentPath = `Users/${currentUser.id}/Gallery/${itemId}`;

    try {
      await documents.deleteDocument(documentPath);
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  editItem = async () => {
    if (this.state.isEditing) {
      const { currentUser, match } = this.props;
      const itemId = match.params.itemId;
      const documentPath = `Users/${currentUser.id}/Gallery/${itemId}`;

      try {
        await documents.updateDocument(documentPath, this.state.item);
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
    const documentPath = `Users/${artistId}`;

    try {
      const artistsData = await documents.getDocument(documentPath);
      artistsData.rating = artistsData.rating + addRating;
      await documents.updateDocument(documentPath, artistsData);
    } catch (error) {
      console.error(error);
    }
  };

  toggleLike = async () => {
    const { currentUser, match } = this.props;
    const { artistId, itemId } = match.params;
    const documentPath = `Users/${artistId}/Gallery/${itemId}`;

    try {
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
      await documents.updateDocument(documentPath, ratedItem);

      this.setState(prevState => ({
        item: ratedItem,
        alreadyLiked: !prevState.alreadyLiked
      }), () => {
        this.updateArtistsRating(addRating);
      });
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

  render() {
    const { item, loading, isEditing, isMineItem, alreadyLiked } = this.state;
    const { currentUser } = this.props;

    const actioButtonProps = {
      isMineItem, isEditing, alreadyLiked, currentUser,
      editItem: this.editItem,
      deleteItem: this.deleteItem,
      toggleLike: this.toggleLike
    };

    if ( loading ) {
      return <Spinner />
    }

    return (
      <div className="item-container">
        <div
          className="image-container"
          style={{
            backgroundImage: `url(${item.imageUrl})`,
            opacity: isEditing ? 0.3 : 1
          }} />

        <div className="item-description">
          {
            isEditing ? <ItemEdit item={item} handleChange={this.handleChange} /> : 
            <ItemDetails item={item} />
          }
          <div className="action-buttons">
            <ActionButtons { ...actioButtonProps } />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withCurrentUser(Item));
