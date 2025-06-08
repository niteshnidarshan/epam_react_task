import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { SearchComponent } from './components/SearchComponent';

const handleSearch = (query) => {
  console.log('Search triggered for:', query);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(SearchComponent, {
  initialQuery: 'Search Movie...',
  onSeach: handleSearch
}))

