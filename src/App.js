import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Artists from './pages/artists/artists.component';
import ArtistProfile from './pages/artist-profile/artist-profile.component';
import ItemDetails from './pages/item-details/item-details.component';
import SignInAndSignUp from './pages/signin-and-signup/signin-and-signup.component';
import NewItem from './pages/new-item/new-item.component';
import { auth } from './firebase/auth';
import { createUserProfile } from './firebase/user-profile';
import './app.scss';

export const UserContext = React.createContext(null);

class App extends React.Component {

  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuthData => {
      if (userAuthData) {
        const userRef = await createUserProfile(userAuthData);
        userRef.onSnapshot(userSnapshot => {
          this.setState({
            currentUser: {
              id: userSnapshot.id,
              ...userSnapshot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: userAuthData });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="app-container">
        <Header currentUser={this.state.currentUser}/>
        <main className="main-container">
          <UserContext.Provider value={this.state.currentUser}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/new" component={NewItem} />
              <Route path="/artists" exact component={Artists} />
              <Route path="/artists/:artistId" exact component={ArtistProfile} />
              <Route path="/artists/:artistId/:itemId" exact component={ItemDetails} />
              <Route path="/signin" component={SignInAndSignUp} />
              <Route path="/:itemId" exact component={ItemDetails} />
            </Switch>
          </UserContext.Provider>
        </main>
      </div>
    );
  }
}

export default App;
