import React from 'react';
import { withRouter } from 'react-router-dom';

import Spinner from '../../components/spinner/spinner.component';
import Rating from '../../components/rating/rating.component';
import Button from '../../components/button/button.component';
import { firestore } from '../../firebase/firestore';
import { auth } from '../../firebase/auth';
import './item-details.styles.scss';

class ItemDetails extends React.PureComponent {

  state = {
    item: {},
    user: null,
    loading: true
  };

  unsubscribeFromAuth = null;

  componentDidMount = () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ user }, () => {
        const itemId = this.props.match.params.itemId;
        const itemRef = firestore.doc(`Users/${user.uid}/Gallery/${itemId}`);
        this.getItemDetails(itemRef);
      });
    });
  };

  getItemDetails = async itemRef => {
    const doc = await itemRef.get();
    doc.exists && this.setState({
      item: { ...doc.data() },
      loading: false
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromAuth();
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
    const {
      item: { title, price, imageUrl, rating, description },
      loading,
      user
    } = this.state;

    if ( loading || !user ) {
      return <Spinner />
    }

    return (
      <div className="item-details-container">
        <div
          className="image-container"
          style={{
            backgroundImage: `url(${imageUrl})`
          }} />

        <div className="item-description">
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
