import React from 'react';

export default class GuessInput extends React.Component {
    constructor(props) {
      super(props);
      this.addGuess = this.addGuess.bind(this);
    }
    addGuess(){
      const guess = this.guessInput.value;
    }
    render() {
      return (
        <div>
          <input
            type="text"
            ref={ref => this.guessInput = ref}
            className="guess-input"
            placeholder="Enter your Guess"/>
          <button
            type="submit"
            onClick={this.addGuess}
            id="guess-button"
            className="button">
            Guess
          </button>
        </div>
      )
    }

}
