import React from 'react';

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
    const userId = auth.currentUser.uid;

    if ( loading ) {
      return <div>Loading...</div>
    }

    return (
      <div className="artists-container">
        {
          artists.map(({ id, displayName, email, rating, createdAt }) => (
            <div
              key={id}
              className="artist">
              <div className="rating">
                &#9733; {rating}
              </div>
              <div className="displayName">
                {displayName} <span>{userId === id ? '(you)' : ''}</span>
              </div>
              <div className="email">
                {email}
              </div>
              <div className="createdAt">
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
