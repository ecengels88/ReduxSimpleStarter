import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyABHUS-qgabTotcAVrtQX9UvhxhXOfcG9A';

//create a new component that produces html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//take component's html and put it in DOM
ReactDOM.render(<App />, document.querySelector('.container'));
