import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ItemDetails from './pages/item-details/item-details.component';
import Auth from './pages/auth/auth.component';
import { auth, createUserProfile } from './firebase';
import './app.scss';

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
        <Header currentUser={this.state.currentUser} />
        <main className="main-container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/signin" component={Auth} />
            <Route path="/:itemId" component={ItemDetails} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
