import React, { Component } from 'react';
// import './App.css';
import Header from './components/Header';
import GameArea from './components/GameArea';
import GameLost from './components/GameLost';
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
    const tiles = [...this.state.tiles];
    tiles.forEach((tile, index) => {
      if (tile.id === clickedTileId && tile.alreadyGuessed) {
        this.setState({ gameInProgress: false }); // game over
        return
      }
      if (tile.id === clickedTileId) {
        tiles[index].alreadyGuessed = true;
      }
      const score = this.state.score + 1
      const highScore = score > this.state.highScore ? score : this.state.highScore;
      this.setState({ tiles, score, highScore });
    }, this);
    if (this.state.score === 3) { // tiles.length
      alert('You win!');
      return;
    }
  }
  resetGame = () => {
    const tiles = [...GameTiles];
    tiles.forEach(tile => {
      // currently resetting manually, not sure why the array isn't resetting to the JSON file though.
      tile.alreadyGuessed = false;
    });
    this.setState((prevState) => {
      return { tiles, gameInProgress: true, score: 0, highScore: prevState.highScore }
    });
  }
  render() {
    return (
      <div className="App">
        <Header gameInProgress={this.state.gameInProgress} score={this.state.score} highScore={this.state.highScore} />
        {this.state.gameInProgress ? <GameArea gameTiles={this.state.tiles} clickTile={this.clickTile} /> : <GameLost score={this.state.score} playAgain={this.resetGame} />}
        <Footer />
      </div>
    );
  }
}

export default App;
