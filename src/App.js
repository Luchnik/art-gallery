import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from './components/navigation/navigation.component';
import HomePage from './pages/homepage/homepage.component';
import ItemDetails from './pages/item-details/item-details.component';
import Auth from './pages/auth/auth.component';
import './app.scss';

const App = () => {
  return (
    <div className="app-container">
      <Navigation />
      <main className="main-section">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signin" component={Auth} />
          <Route path="/:itemId" component={ItemDetails} />
        </Switch>
      </main>
    </div>
  );
}

export default App;