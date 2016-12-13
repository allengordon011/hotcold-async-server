import React from 'react';

import {connect} from 'react-redux';

import * as actions from '../actions/index';

export class GuessInput extends React.Component {
    constructor(props) {
      super(props);
      this.addGuess = this.addGuess.bind(this);
    }
    addGuess(){
      const guess = this.guessInput.value;
      this.props.dispatch(actions.addGuess(guess));

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

const mapStateToProps = (state, props) => ({
  guessedNumbers: state.guessedNumbers
});

export default connect(mapStateToProps)(GuessInput);
