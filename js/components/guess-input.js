import React from 'react';

import PrevGuesses from './prev-guesses'

export default class GuessInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <input type="text" className="guess-input" placeholder="Enter your Guess"/>
          <button type="submit" id="guessButton" className="button">Guess</button>
          <p>Guess #!</p>
          <PrevGuesses />
        </div>
      )
    }

}
