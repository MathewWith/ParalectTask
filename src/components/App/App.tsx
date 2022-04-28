import React from 'react';
import Header from '../Header';
import RepositoriesList from '../RepositoriesList';
import UserDescription from '../UserDescription';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <RepositoriesList />
      <UserDescription />
    </div>
  );
}

export default App;
