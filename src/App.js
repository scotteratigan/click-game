import React, { Component } from 'react';
// import './App.css';
import Header from './components/Header';
import GameArea from './components/GameArea';
import GameOver from './components/GameOver';
import Footer from './components/Footer';
import GameTiles from './gameTiles.json';

class App extends Component {
  constructor() {
    super();
    // In this initial construction, we want to set highScore to zero.
    // This is the only place we reset the high score.
    const tiles = GameTiles.slice(0); // trying to create a copy, yet any change here is reflecting to GameTiles as well.
    this.state = { tiles, gameInProgress: true, score: 0, highScore: 0 };
  }
  clickTile = clickedTileId => {
    console.log('Tile clicked, highscore is:', this.state.highScore);
    const tiles = [...this.state.tiles];
    for (let i = 0; i < tiles.length; i++) {
      if (tiles[i].id === clickedTileId) {
        if (tiles[i].clicked === true) {
          // they've already clicked this tile, game should now be over:
          this.setState({ gameInProgress: false });
        }
        else {
          tiles[i].clicked = true;
          const score = this.state.score + 1
          const highScore = score > this.state.highScore ? score : this.state.highScore;
          this.setState({ tiles, score, highScore });
        }
      }
    }
    setTimeout(() => {
      console.log('GameTiles are now:', GameTiles);
      console.log('Tiles are now:', this.state.tiles);
    }, 1);
  }
  resetGame = () => {
    const tiles = this.state.tiles;
    tiles.forEach(tile => {
      // currently resetting manually, not sure why the array isn't resetting to the JSON file though.
      tile.clicked = false;
    });
    this.setState({ tiles, gameInProgress: true, score: 0, highScore: this.state.highScore });
  }
  render() {
    return (
      <div className="App">
        <Header gameInProgress={this.state.gameInProgress} score={this.state.score} highScore={this.state.highScore} />
        {this.state.gameInProgress ? <GameArea gameTiles={this.state.tiles} clickTile={this.clickTile} /> : <GameOver score={this.state.score} playAgain={this.resetGame} />}
        <Footer />
      </div>
    );
  }
}

export default App;
