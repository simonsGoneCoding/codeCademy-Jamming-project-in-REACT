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
      playlistName: "List1",
      playlistTracks: [
        {
          name: "playlistName1",
          artist: "playlistArtist1",
          album: "playlistAlbum1",
          id: 4,
        },
        {
          name: "playlistName2",
          artist: "playlistArtist2",
          album: "playlistAlbum2",
          id: 5,
        },
        {
          name: "playlistName3",
          artist: "playlistArtist3",
          album: "playlistAlbum3",
          id: 6,
        },
      ],
    };

    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    const tracks = this.state.playlistTracks.slice(0);
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({ playlistTracks: tracks });
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
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <PlayList
              name={this.state.playlistName}
              tracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
