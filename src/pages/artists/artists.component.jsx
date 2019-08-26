import React from 'react';
import { withRouter } from 'react-router';

import Spinner from '../../components/spinner/spinner.component';
import Artist from '../../components/artist/artist.component';
import { withCurrentUser } from '../../hocs';
import { firestore } from '../../firebase/firestore';
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

  onNameClick = artistId => {
    const { currentUser, history } = this.props;
    const pushTarget = currentUser && currentUser.id === artistId ? '/' : `/artists/${artistId}`;
    history.push(pushTarget);
  };

  componentWillUnmount = () => {
    this.unsubscribeFromFirestore();
  };

  render() {
    const { artists, loading } = this.state;
    const { currentUser } = this.props;

    if (loading) {
      return <Spinner />
    }

    if (currentUser && !artists.length) {
      return <h2>No artists</h2>
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
          artists.map(({ id, ...restProps }) => (
            <Artist
              key={id}
              onNameClick={this.onNameClick}
              userId={currentUser ? currentUser.id : null}
              artistId={id}
              {...restProps} />
          ))
        }
      </div>
    );
  }
}

export default withRouter(withCurrentUser(Artists));
