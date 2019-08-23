import React from 'react';

import Spinner from '../../components/spinner/spinner.component';
import Artist from '../../components/artist/artist.component';
import { withCurrentUser } from '../../hocs';
import { firestore } from '../../firebase/firestore';
import './artists.styles.scss';

class Artists extends React.PureComponent {
  state = {
    artists: []
  };

  unsubscribeFromFirestore = null;

  componentDidMount = () => {
    this.unsubscribeFromFirestore = firestore.collection(`Users`).onSnapshot(snapshot => {
      const artists = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      const sortedByRating = artists.sort( ( first, second ) => second.rating - first.rating );

      this.setState({ artists: sortedByRating });
    });
  };

  onNameClick = artistId => {
    console.log('onNameClick', artistId);
  };

  componentWillUnmount = () => {
    this.unsubscribeFromFirestore();
  };

  render() {
    const { artists } = this.state;
    const { currentUser } = this.props;

    if (currentUser && !artists.length) {
      return <h2>No artists</h2>
    }

    if (currentUser && artists.length) {
      return (
        <div className="artists-container">
          <div className="hints">
            <div className="user-rating">rating</div>
            <div className="display-name">display name</div>
            <div className="email">email</div>
            <div className="created-at">created at</div>
          </div>
          {
            artists.map(({ id, ...restProps }) => (
              <Artist
                key={id}
                onNameClick={this.onNameClick}
                userId={currentUser.id}
                artistId={id}
                {...restProps} />
            ))
          }
        </div>
      );
    }

    return <Spinner />;
  }
}

export default withCurrentUser(Artists);
