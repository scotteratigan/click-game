import React, { Component } from 'react';
// import './App.css';
import Header from './components/Header';
import GameArea from './components/GameArea';
import Footer from './components/Footer';
import GameTiles from './gameTiles.json';

class App extends Component {
  clickTile(tileId) {
    alert('You clicked: ' + tileId);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <GameArea gameTiles={GameTiles} clickTile={this.clickTile} />
        <Footer />
      </div>
    );
  }
}

export default App;
