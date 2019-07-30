import React from 'react';

import jumbotron from '../../assets/images/jumbotron.jpeg'
import { withCurrentUser } from '../../hocs';
import Grid from '../../components/grid/grid.component';
import './homepage.styles.scss';

const HomePage = ({ currentUser }) => {

  if (currentUser) {
    return <Grid userId={currentUser.id} />;
  }

  return (
    <div className="home-page-container">
      <div className="jumbotron" style={{ backgroundImage: `url(${jumbotron})` }} />
      <div className="heading-container">
        <h1>Personal Art Gallery</h1>
        <p>Where your masterpieces are stored</p>
      </div>
    </div>
  );
}

export default withCurrentUser(HomePage);
