import React, { Component } from 'react';
// import './App.css';
import Header from './components/Header';
import GameArea from './components/GameArea';
import Footer from './components/Footer';
import GameTiles from './gameTiles.json';

class App extends Component {
  constructor() {
    super();
    this.state = { tiles: GameTiles };
  }
  clickTile = (clickedTileId) => {
    console.log('You clicked: ' + clickedTileId);
    this.state.tiles.forEach(tile => {
      if (tile.id === clickedTileId) {
        // alert('You clicked ' + tile.text);
        tile.clicked = true;
      }
    });
    console.log(this.state.tiles);
  }
  render() {
    console.log(this.state.tiles);
    return (
      <div className="App">
        <Header />
        <GameArea gameTiles={this.state.tiles} clickTile={this.clickTile} />
        <Footer />
      </div>
    );
  }
}

export default App;
