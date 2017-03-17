import React from 'react';
import {connect} from 'react-redux';

function PrevGuesses(props) {
	// have access to guessed numbers array in props.
	let list;
	list = props.guessedNumbers.map((num, index) => {
		return (
			<li key={index}>{num}</li>
		);
	});

	return (
		<div id="prev-guesses">
			<ul>Previous Guesses: {list}</ul>
		</div>
	)
}

const mapStateToProps = (state, props) => ({
  guessedNumbers: state.guessedNumbers
});

export default connect(mapStateToProps)(PrevGuesses);
