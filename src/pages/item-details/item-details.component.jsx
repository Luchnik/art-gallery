import React from 'react';
import { withRouter } from 'react-router-dom';

import Button from '../../components/button/button.component';
import { firestore } from '../../firebase/firestore';
import { auth } from '../../firebase/auth';
import './item-details.styles.scss';

class ItemDetails extends React.PureComponent {

  state = {};

  componentDidMount = () => {
    const userId = auth.currentUser.uid;
    const itemId = this.props.match.params.itemId;

    const itemRef = firestore.doc(`Users/${userId}/Gallery/${itemId}`);
    this.getItemDetails(itemRef);
  };

  getItemDetails = async itemRef => {
    const doc = await itemRef.get();
    doc.exists && this.setState({ ...doc.data() });
  };

  deleteItem = async () => {
    const userId = auth.currentUser.uid;
    const itemId = this.props.match.params.itemId;

    try {
      await firestore.doc(`Users/${userId}/Gallery/${itemId}`).delete();
      this.props.history.push('/');
    } catch( error ) {
      console.error(error);
    }
  };

  render() {
    const { title, price, imageUrl, description } = this.state;

    return (
      <div className="item-details-container">
        <div
          className="image-container"
          style={{
            backgroundImage: `url(${imageUrl})`
          }} />

        <div className="item-description">
          <h2 className="title">{title}</h2>
          <label className="price">&#8372;{price}</label>
          <p className="description">{description}</p>
          <div className="action-buttons">
            <Button
              type="submit"
              small
              styleType="secondary">
              Edit
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

export default withRouter(ItemDetails);
