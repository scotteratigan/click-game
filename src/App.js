import React, { Component } from 'react';
import Header from './components/Header/';
import GameArea from './components/GameArea/';
import GameLost from './components/GameLost/';
import GameWon from './components/GameWon/';
import Footer from './components/Footer/';
import warriorsPlayerData from './gameTiles.json';

class App extends Component {
  state = { tiles: warriorsPlayerData, gameState: 'playing', score: 0, highScore: 0 };

  handleTileClick = clickedTileId => {
    const tiles = [...this.state.tiles];
    // Iterate over array to determine which tile was clicked:
    tiles.forEach((tile, index) => {
      if (tile.id === clickedTileId && tile.alreadyGuessed) {
        // If this tile was previously clicked, player has lost:
        this.setState({ gameState: 'lost' });
      }
      else if (tile.id === clickedTileId) {
        // only running full logic once we find the clicked tile
        // otherwise events would fire 12 times
        tiles[index].alreadyGuessed = true;
        const newScore = this.state.score + 1
        const highScore = newScore > this.state.highScore ? newScore : this.state.highScore;
        this.setState({ score: newScore, highScore, lastTileClicked: tile });
        if (newScore === tiles.length) {
          this.setState({ gameState: 'won' })
        }
      }
    }, this);
  }

  resetGame = () => {
    const tiles = [...warriorsPlayerData];
    tiles.forEach(tile => tile.alreadyGuessed = false);
    this.setState({ tiles, gameState: 'playing', score: 0 });
  }

  render() {
    const { gameState, score, highScore, tiles, lastTileClicked } = this.state;
    return (
      <div className='App'>
        <Header gameState={gameState} score={score} highScore={highScore} />
        {/* Conditionally render the game area based on the game state: */}
        {gameState === 'playing' && <GameArea gameTiles={tiles} handleTileClick={this.handleTileClick} />}
        {gameState === 'won' && <GameWon playAgain={this.resetGame} />}
        {gameState === 'lost' && <GameLost score={score} highScore={highScore} playAgain={this.resetGame} lastTileClicked={lastTileClicked} />}
        <Footer />
      </div>
    );
  }
}

export default App;
