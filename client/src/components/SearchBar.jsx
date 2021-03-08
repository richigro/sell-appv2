import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = props => {
  return (
    <div>
      <input type="text" placeholder="Search Sell-App"/>
      <button>Search</button>
    </div>
  );
};

SearchBar.propTypes = {
  
};

export default SearchBar;