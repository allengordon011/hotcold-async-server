import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();
// file paths
// import Index from '../js/index';
import Feedback from '../js/components/feedback';
// import Game from '../js/components/game';
import GuessCount from '../js/components/guess-count';
// import GuessInput from '../js/components/guess-input';
// import NavBar from '../js/components/nav-bar';
// import PrevGuesses from '../js/components/prev-guesses';


describe('GuessCount Component', function() {
  it('it renders a p with guess count',  function() {
  	const renderer = TestUtils.createRenderer();
  	renderer.render(<GuessCount stateCount={4}/>)

  	const result = renderer.getRenderOutput();
  	console.log(result);

  	result.type.should.equal('p') 
  	result.props.children.join('').should.equal('Guess #4!')

  });
});