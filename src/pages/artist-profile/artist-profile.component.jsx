import React from 'react';

import Spinner from '../../components/spinner/spinner.component';
import Rating from '../../components/rating/rating.component';
import Grid from '../../components/grid/grid.component';
import documents from '../../firebase/documents';
import './artist-profile.styles.scss';

class ArtistProfile extends React.Component {

  state = {
    artist: {},
    loading: true
  };

  componentDidMount = async () => {
    const { match } = this.props;
    const documentPath = `Users/${match.params.artistId}`;

    try {
      const artist = await documents.getDocument(documentPath);
      this.setState({ artist, loading: false });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { artist: { displayName, rating }, loading } = this.state;

    const { match } = this.props;
    const artistId = match.params.artistId;

    if (loading) {
      return <Spinner />
    }

    return (
      <React.Fragment>
        <div className="artists-data">
          <label className="rating">
            <Rating rating={rating} />
          </label>
          {displayName} Gallery
        </div>
        <Grid userId={artistId} />
      </React.Fragment>
    );
  }
}

export default ArtistProfile;
