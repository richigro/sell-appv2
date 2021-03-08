import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Links from './components/Links';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Header/>
      <ProductList/>
    </div>
  );
}

export default App;