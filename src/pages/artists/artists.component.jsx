import React from 'react';

import Rating from '../../components/rating/rating.component';
import { firestore } from '../../firebase/firestore';
import { auth } from '../../firebase/auth';
import './artists.styles.scss';

class Artists extends React.PureComponent {
  state = {
    artists: [],
    loading: true
  };

  unsubscribeFromFirestore = null;

  componentDidMount = () => {
    this.unsubscribeFromFirestore = firestore.collection(`Users`).onSnapshot(snapshot => {
      const artists = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      const sortedByRating = artists.sort( ( first, second ) => second.rating - first.rating );

      this.setState({ artists: sortedByRating, loading: false });
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromFirestore();
  };

  render() {
    const { loading, artists } = this.state;

    if ( loading || !auth ) {
      return <div>Loading...</div>
    }

    if ( !artists.length ) {
      return <div>No artists</div>
    }

    return (
      <div className="artists-container">
        <div className="hints">
          <div className="user-rating">rating</div>
          <div className="display-name">display name</div>
          <div className="email">email</div>
          <div className="created-at">created at</div>
        </div>
        {
          artists.map(({ id, displayName, email, rating, createdAt }) => (
            <div
              key={id}
              className="artist">
              <div className="user-rating">
                <Rating rating={rating} />
              </div>
              <div className="display-name">
                {displayName}
                {
                  auth.currentUser ? <span>{auth.currentUser.uid === id ? ' (you)' : ''}</span> : ''
                }
              </div>
              <div className="email">
                {email}
              </div>
              <div className="created-at">
                {new Date(createdAt.seconds * 1000).toDateString()}
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Artists;
