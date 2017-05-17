import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyABHUS-qgabTotcAVrtQX9UvhxhXOfcG9A';


//create a new component that produces html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'wingsuit'}, (videos) => {
      // this.setState({ videos: videos });
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

//take component's html and put it in DOM
ReactDOM.render(<App />, document.querySelector('.container'));
