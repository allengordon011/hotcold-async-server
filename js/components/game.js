import React from 'react';

import GuessInput from './guess-input';
import Feedback from './feedback';
import GuessCount from './guess-count';
import PrevGuesses from './prev-guesses';
import NavBar from './nav-bar';

export default class Game extends React.Component {
  constructor(props){
    super(props);

  }
    render() {
      return (
        <div>
          <NavBar />
          <h1 id="title">HOT or COLD</h1>
          <Feedback />
          <GuessInput />
          <GuessCount />
          <PrevGuesses />
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
