import React from 'react';
import ReactDOM from 'react-dom';

//create a new component that produces html
const App = () => {
  return <div>Hi!</div>;
}

//take component's html and put it in DOM
ReactDOM.render(<App />, document.querySelector('.container'));
