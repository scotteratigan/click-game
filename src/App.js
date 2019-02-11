import React, { Component } from 'react';
// import './App.css';
import Header from './components/Header';
import GameArea from './components/GameArea';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <GameArea />
        <Footer />
      </div>
    );
  }
}

export default App;
