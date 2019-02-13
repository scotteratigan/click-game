# Warriors Memory Game
[Play the Game!](https://scotteratigan.github.io/click-game/)

## A Stateful React app

### To win the game, click each Warrior only once.

## Features
- Random Tile Reshuffling
- Score
- High Score
- Win Condition
- Loss Condition
- Player Quotes

## Technical Info
- Mostly uses bootstrap for spacing/styling with some custom css loaded on a per-component basis
- Heavily utilizes ES6 syntax whenever possible - .map, .forEach, object destructuring, ternary conditional JSX renders
- ```<Tile />``` component Shuffling implemented via Fisher-Yates algorithm
- ```<Tile />``` component keys are equal to player's jersey numbers.

## To Install
- clone the repo
- `npm install`
- `npm start`

See [Create React App](https://github.com/facebook/create-react-app) for more information on the React development environment.
