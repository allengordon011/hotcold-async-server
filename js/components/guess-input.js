import React from 'react';
import {connect} from 'react-redux';
import { FormControl, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom'

import * as actions from '../actions/index';

export class GuessInput extends React.Component {
    constructor(props) {
      super(props);
      this.addGuess = this.addGuess.bind(this);
    }
    addGuess(event){
      event.preventDefault();
      let guess = ReactDOM.findDOMNode(this.textInput).value;
      this.props.dispatch(actions.addGuess(guess));
      event.target.input.value = "";
    }
//add alerts for guesses that are invalid

    render() {
      return (
        <div>
          <form className="form" onSubmit={this.addGuess}>
          <FormControl
            type="text"
            ref={(input) => { this.textInput = input; }}
            className="guess-input" name="input"
            placeholder="Enter your Guess" />
          <Button
            type="submit"
            id="guess-button"
            className="button">
            Guess
        </Button>
        </form>
        </div>
      )
    }
}

// const mapStateToProps = (state, props) => ({
//   guessedNumbers: state.guessedNumbers
// });

export default connect()(GuessInput);
