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
    this.state = { tiles: GameTiles, gameInProgress: true, score: 0 };
  }
  clickTile = clickedTileId => {
    const gameTiles = [...this.state.tiles];
    console.log(gameTiles);
    for (let i = 0; i < gameTiles.length; i++) {
      if (gameTiles[i].id === clickedTileId) {
        if (gameTiles[i].clicked === true) {
          this.setState({ gameInProgress: false });
          // alert('GAME OVER');
        }
        else {
          gameTiles[i].clicked = true;
          this.setState({ tiles: gameTiles, score: this.state.score + 1 });
        }
      }
    }
  }
  render() {
    let mainSection;
    if (this.state.gameInProgress) {
      mainSection = <GameArea gameTiles={this.state.tiles} clickTile={this.clickTile} />;
    } else {
      mainSection = <GameOver />;
    }

    return (
      <div className="App">
        <Header />
        SCORE: {this.state.score}
        {mainSection}
        <Footer />
      </div>
    );
  }
}

export default App;
