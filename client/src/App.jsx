import React from 'react';
import Header from './components/Header';
import Links from './components/Links';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Header/>
      <Links/>
    </div>
  );
}

export default App;