import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/Youtube";
import VideoList from "./VideoList";
import VideoItem from "./VideoItem";

class App extends React.Component {
  state = { videos: [] };

  onSearchSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <h1>Youtube</h1>
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        Foram encontrados: {this.state.videos.length} vídeos.
        <VideoList videos={this.state.videos} />
        <VideoItem />
      </div>
    );
  }
}

export default App;
