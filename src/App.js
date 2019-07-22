import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from './components/navigation/navigation.component';
import HomePage from './pages/homepage/homepage.component';
import ItemDetails from './pages/item-details/item-details.component';
import SignIn from './pages/signin/signin.component';
import './app.scss';

const App = () => {
  return (
    <div className="app-container">
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/:itemId" component={ItemDetails} />
      </Switch>
    </div>
  );
}

export default App;
