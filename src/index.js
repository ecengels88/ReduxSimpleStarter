import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyABHUS-qgabTotcAVrtQX9UvhxhXOfcG9A';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

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
