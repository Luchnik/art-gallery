import React from 'react';

import { firestore } from '../../firebase';
import './item-details.styles.scss';

class ItemDetails extends React.Component {

  state = {};

  componentDidMount = () => {
    const { match } = this.props;
    const itemId = match.params.itemId;

    const itemRef = firestore.doc(`Items/${itemId}`);
    this.getItemDetails(itemRef);
  };

  getItemDetails = async itemRef => {
    const doc = await itemRef.get();
    doc.exists && this.setState({ ...doc.data() });
  };

  render() {
    const { title, price, imageUrl } = this.state;

    return (
      <div className="item-details-component">
        <div
          className="image-container"
          style={{
            backgroundImage: `url(${imageUrl})`
          }} />

        <div className="item-data">
          <h2>{title}</h2>
          <label>Price: &#8372;{price}</label>
        </div>
      </div>
    );
  }
}

export default ItemDetails;
