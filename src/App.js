import React from 'react';

import Navigation from './components/navigation/navigation.component';
import HomePage from './pages/homepage/homepage.component';
import './app.scss';

const App = () => {
  return (
    <div className="app-container">
      <Navigation />
      <main>
        <HomePage />
      </main>
    </div>
  );
}

export default App;
