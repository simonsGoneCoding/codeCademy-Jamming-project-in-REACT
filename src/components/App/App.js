import React, { Component } from "react";
import "./App.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { PlayList } from "../PlayList/PlayList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: "bubu", artist: "smerfy", album: "czemu nie", id: 1 },
        { name: "baba", artist: "krasnale", album: "mlotek", id: 2 },
        { name: "cwircwir", artist: "ptaszki", album: "ziarenka", id: 3 },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <PlayList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
