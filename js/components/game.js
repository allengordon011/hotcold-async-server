import React from 'react';

import GuessInput from './guess-input'

export default class Game extends React.Component {
  constructor(props){
    super(props);

  }
    render() {
      return (
        <div><h1 id="title">HOT or COLD</h1>
          <GuessInput />
        </div>
      );
    }
}

//component with html layout
//nav bar at top with 2 elements: WHAT? (left) and +NEW GAME (right)
//title HOT or COLD
//container for the game elements
//feedback element banner
//guess input field
//guess count field
//prev guesses displayed in <ul>
