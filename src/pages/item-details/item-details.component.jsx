import React from 'react';

import { withCurrentUser } from '../../hocs';
import { firestore } from '../../firebase/firestore';
import './item-details.styles.scss';

class ItemDetails extends React.PureComponent {

  state = {};

  componentDidMount = () => {
    const { match, currentUser } = this.props;
    const itemId = match.params.itemId;

    const itemRef = firestore.doc(`Users/${currentUser.id}/Gallery/${itemId}`);
    this.getItemDetails(itemRef);
  };

  getItemDetails = async itemRef => {
    const doc = await itemRef.get();
    doc.exists && this.setState({ ...doc.data() });
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
        </div>
      </div>
    );
  }
}

export default withCurrentUser(ItemDetails);
